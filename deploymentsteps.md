0. Install Node Modules: `npm i`
1. Build Dist Folder: `npm run build`
2. Upload local object to s3 via CLI command: `aws s3 sync . s3://amzn-s3-demo-bucket`
3. Clear cache by triggering invalidation in CloudFront: `aws cloudfront create-invalidation  --distribution-id EZ1G1UUNYRWSQ --paths "/*"`
