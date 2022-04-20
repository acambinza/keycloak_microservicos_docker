# Teste de autenticação de Microserviços usando o Keycloak

- INTEGRAÇÃO DO MICROSERVIÇO COM O KEYCLOAK

# STEPS

- install
    - keycloak-connect
    - express-session
- criando a integracao 
    - arquivo keycload.ts (aonde vamos passar algumas configuracoes como o realm)
    - no server.ts - chamar o keycloak e criar uma middleware
   
- protegendo as rotas
    - informar uma middleware nas rotas protegidas - keycloak.protect()


# keycloak_microservicos_docker
Keycload Micro-Servocos e Docker

docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:17.0.1 start-dev



# STEPS

## criacao das realms (reinos) - gerencia autenticação de um grupo de clientes
## criacao dos users - que irão  fazer o login - podem ser associados depois a um client (ex: todos os colaboradores)
## criacao dos clients (serão os nossos microservicos) - deve ter uma porta bem definida
    - passar alguns parametros obrigatorios 
        - Valid Redirect URIs - ex.: http://localhost:3000/*
        - Root URL - ex.: http://localhost:3000
        - Web Origins - ex.: http://localhost:3000
        - Admin URL - ex.: http://localhost:3000/admin
    - na aba credentials vamos encontrar o client secret

## criacao das rules do realm e dos clients - depois podem ser add aos users

## criacao de grupo com certas roles e add um user no grupo criado
