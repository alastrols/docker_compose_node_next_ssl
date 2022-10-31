1. Install Docker
2. cd nextjs && yarn
3. cd nodejs && npm install
4. docker compose -f docker-compose-ssl.yml up -d  
5. cd website/site1.com
6. Config proxy port in website/site1.com/site1.conf
7. docker compose -f docker-compose.yml up -d
8. cd ..
9. cd ..
10. cd nginx-letensrypt
11. docker compose -f docker-compose-ssl.yml up -d  