import handlebars from 'vite-plugin-handlebars';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

// Load data from JSON files in the data folder
const loadData = () => {
  const dataFolder = path.resolve(__dirname, 'src/data');
  return fs.readdirSync(dataFolder).reduce((data, file) => {
    const filePath = path.join(dataFolder, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const name = path.basename(file, '.json');
    data[name] = fileData;
    return data;
  }, {});
};

// Custom plugin to watch partials directory
const watchPartialsPlugin = () => {
  return {
    name: 'watch-partials',
    configureServer(server) {
      const partialsDir = path.resolve(__dirname, 'src/partials');

      // Watch the partials directory for changes
      server.watcher.add(partialsDir);
      server.watcher.on('change', (filePath) => {
        server.ws.send({
          type: 'full-reload',
          path: '*',
        });
      });
    },
  };
};

export default {
  plugins: [
    tailwindcss(),
    handlebars({
      // This is the directory where your partials are located
      partialDirectory: path.resolve(__dirname, 'src/partials'),
      context: loadData(),
      reloadOnPartialChange: true
    }),
    watchPartialsPlugin(),
  ],
  // This is the directory where your pages are located
  root: 'src/pages',
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    hmr: true,
    fs: {
      strict: false,
    },
  },
  build: {
    // this is the output directory for the generated files
    // these are the files you need to launch your site
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      // Here is where you add new pages.
      // See about page (which does not exist) commented out below
      input: {
        index: path.resolve(__dirname, 'src/pages/index.html'),
        // about: path.resolve(__dirname, 'src/pages/about.html'),
      },
    },
  },
};
