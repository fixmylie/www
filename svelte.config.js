import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/www',
		},
		appDir: 'internal',
    prerender: {
      default: true
    }
	}
};

export default config;
