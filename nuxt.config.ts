// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@element-plus/nuxt'],

  devtools: {
    enabled: true,
  },

  app: {
    // head
    head: {
      title: '创联教育-短视频运营|直播电商|Python数据分析|影视剪辑培训机构',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'zh',
      },
      script: [
        {
          hid: '53-script', // 添加唯一标识符，避免重复注入
          innerHTML: `
          (function () {
            var _53code = document.createElement("script");
            _53code.src = "https://tb.53kf.com/code/code/52e591222b0ff13b93ea2d0a1f4fe3bf8/1";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(_53code, s);
          })();
        `,
          type: 'text/javascript',
        },
      ],
    },
  },

  // css
  css: ['@unocss/reset/tailwind.css', '~/assets/scss/index.scss'],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',
  ssr: true,
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    static: true,
    devProxy: {
      '/api': {
        target: 'https://toc-admin-api-test.hrtiger.cn',
        changeOrigin: true,
        prependPath: true,
      },
    },
    routeRules: {
      '/api/**': {
        proxy: 'https://toc-admin-api-test.hrtiger.cn/**',
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
