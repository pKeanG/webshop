# Webshop GameFi — convenience targets

.PHONY: help install up down logs dev fe be contracts compile clean

help:
	@echo "Webshop GameFi — make targets:"
	@echo "  install     pnpm install (workspaces)"
	@echo "  up          docker compose up -d (postgres + redis)"
	@echo "  up-tools    docker compose --profile tools up -d (+ pgadmin)"
	@echo "  down        docker compose down"
	@echo "  logs        docker compose logs -f"
	@echo "  dev         run frontend + backend in parallel"
	@echo "  fe          run frontend only"
	@echo "  be          run backend only"
	@echo "  compile     compile smart contracts"
	@echo "  clean       remove node_modules + build artifacts"

install:
	pnpm install

up:
	docker compose up -d postgres redis

up-tools:
	docker compose --profile tools up -d

down:
	docker compose down

logs:
	docker compose logs -f

dev:
	pnpm dev

fe:
	pnpm dev:frontend

be:
	pnpm dev:backend

compile:
	pnpm --filter @webshop-gamefi/contracts compile

clean:
	find . -name 'node_modules' -type d -prune -exec rm -rf {} +
	rm -rf src/frontend/.next src/backend/dist src/contracts/cache src/contracts/artifacts
