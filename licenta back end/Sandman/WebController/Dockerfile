#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
#EXPOSE 80
#EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["WebController/WebController.csproj", "WebController/"]
COPY ["Service/Service.csproj", "Service/"]
COPY ["Models/Models.csproj", "Models/"]
COPY ["ServiceInterfaces/ServiceInterfaces.csproj", "ServiceInterfaces/"]
COPY ["Repository/Repository.csproj", "Repository/"]
RUN dotnet restore "WebController/WebController.csproj"
COPY . .
WORKDIR "/src/WebController"
RUN dotnet build "WebController.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WebController.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "WebController.dll"]
CMD ASPNETCORE_URLS=http://*:$PORT dotnet WebController.dll