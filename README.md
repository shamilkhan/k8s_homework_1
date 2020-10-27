# 🐻‍ Homework

###  [Docker Image Link](https://hub.docker.com/repository/docker/shamilkhan1/node_app)

## Steps

### Create Namespace
```sh
  kubectl create namespace myapp && kubectl config set-context --current --namespace=myapp
```

### Ingress on 
```sh
 minikube addons enable ingress && kubectl get pods -n kube-system | grep ingress
```

### Run
```sh
kubectl apply -f deployment.yaml -f service.yaml -f ingress.yaml
```

### Check
```sh
 curl -H 'Host: arch.homework' /otusapp/health
```