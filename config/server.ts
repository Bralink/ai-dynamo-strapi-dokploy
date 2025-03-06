export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  preview: {
		port: 1337,
		host: true,    
	},
	server: {        
		host: true, 
		port: 1337
	},
  app: {
    keys: env.array('APP_KEYS'),
  },
});
