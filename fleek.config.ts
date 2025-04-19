import { FleekConfig } from '@fleek-platform/cli';

export default {
  "sites": [
    {
      "slug": "ayungavis",
      "distDir": "dist",
      "buildCommand": "bun run build"
    }
  ]
} satisfies FleekConfig;
