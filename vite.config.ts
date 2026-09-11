import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function cartoTileProxy(): Plugin {
  return {
    name: 'carto-tile-proxy',
    configureServer(server) {
      server.middlewares.use('/api/carto-tiles', async (req, res) => {
        const key = process.env.CARTO_BASEMAPS_API_KEY;
        if (!key) {
          res.statusCode = 500;
          res.end('Missing CARTO_BASEMAPS_API_KEY');
          return;
        }

        try {
          const requestUrl = new URL(req.url ?? '/', 'http://localhost');
          const parts = requestUrl.pathname.split('/').filter(Boolean);
          const [style, z, x, file] = parts;
          const y = file?.replace(/\.png$/, '');
          const allowedStyles = new Set(['dark_all', 'light_all', 'voyager']);

          if (!allowedStyles.has(style) || !z || !x || !y || !/^\d+$/.test(z) || !/^\d+$/.test(x) || !/^\d+$/.test(y)) {
            res.statusCode = 400;
            res.end('Invalid tile request');
            return;
          }

          const upstream = `https://basemaps.cartocdn.com/rastertiles/${style}/${z}/${x}/${y}.png?key=${encodeURIComponent(key)}`;
          const upstreamRes = await fetch(upstream, {
            headers: {
              'user-agent': 'TravelDigestAI-Demo/1.0'
            }
          });

          if (!upstreamRes.ok || !upstreamRes.body) {
            res.statusCode = upstreamRes.status;
            res.end(`CARTO tile fetch failed: ${upstreamRes.status}`);
            return;
          }

          res.statusCode = upstreamRes.status;
          res.setHeader('content-type', upstreamRes.headers.get('content-type') ?? 'image/png');
          res.setHeader('cache-control', 'public, max-age=86400');
          const arrayBuffer = await upstreamRes.arrayBuffer();
          res.end(Buffer.from(arrayBuffer));
        } catch (error) {
          res.statusCode = 502;
          res.end('CARTO tile proxy error');
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/carto-tiles', async (req, res) => {
        const key = process.env.CARTO_BASEMAPS_API_KEY;
        if (!key) {
          res.statusCode = 500;
          res.end('Missing CARTO_BASEMAPS_API_KEY');
          return;
        }

        try {
          const requestUrl = new URL(req.url ?? '/', 'http://localhost');
          const parts = requestUrl.pathname.split('/').filter(Boolean);
          const [style, z, x, file] = parts;
          const y = file?.replace(/\.png$/, '');
          const allowedStyles = new Set(['dark_all', 'light_all', 'voyager']);

          if (!allowedStyles.has(style) || !z || !x || !y || !/^\d+$/.test(z) || !/^\d+$/.test(x) || !/^\d+$/.test(y)) {
            res.statusCode = 400;
            res.end('Invalid tile request');
            return;
          }

          const upstream = `https://basemaps.cartocdn.com/rastertiles/${style}/${z}/${x}/${y}.png?key=${encodeURIComponent(key)}`;
          const upstreamRes = await fetch(upstream, {
            headers: {
              'user-agent': 'TravelDigestAI-Demo/1.0'
            }
          });

          if (!upstreamRes.ok || !upstreamRes.body) {
            res.statusCode = upstreamRes.status;
            res.end(`CARTO tile fetch failed: ${upstreamRes.status}`);
            return;
          }

          res.statusCode = upstreamRes.status;
          res.setHeader('content-type', upstreamRes.headers.get('content-type') ?? 'image/png');
          res.setHeader('cache-control', 'public, max-age=86400');
          const arrayBuffer = await upstreamRes.arrayBuffer();
          res.end(Buffer.from(arrayBuffer));
        } catch (error) {
          res.statusCode = 502;
          res.end('CARTO tile proxy error');
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env.CARTO_BASEMAPS_API_KEY = env.CARTO_BASEMAPS_API_KEY;

  return {
    base: '/Travel-Digest-AI-Demo/',
    plugins: [react(), tailwindcss(), cartoTileProxy()],
    server: {
      host: '127.0.0.1',
      port: 5173
    },
    preview: {
      host: '127.0.0.1',
      port: 4173
    }
  };
});
