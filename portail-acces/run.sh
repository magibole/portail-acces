#!/usr/bin/with-contenv bashio

bashio::log.info "Démarrage du serveur Portail Accès sur le port 8099..."

cd /app
node server.js
