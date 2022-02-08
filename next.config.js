/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(png|svg|jpg|gif|pdf)$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: 'Certificado.pdf'
  //         }
  //       }
  //     ]
  //   })

  //   return config
  // },
}



module.exports = nextConfig
