SOURCE=$(wildcard *.go)
.PHONY: validate
validate:
	go mod download
	goimports -w $(SOURCe)
	go mod tidy
	go vet $(SOURCE)
	go test -cover $(SOURCE)
.PHONY: build
build:
	go build -o makedit $(SOURCE)
