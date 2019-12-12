const config = () => ({
  api: {
    baseURL: 'https://localhost:8081',
  },
  app: {
    environment: null,
    namespace: 'gym_apps',
  },
});

Object.freeze(config);

export { config };
