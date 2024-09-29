/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
