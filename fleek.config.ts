import { FleekConfig } from '@fleek-platform/cli';

export default {
  "sites": [
    {
      "slug": "ayungavis",
      "distDir": "dist",
      "buildCommand": "pnpm run build"
    }
  ]
} satisfies FleekConfig;
