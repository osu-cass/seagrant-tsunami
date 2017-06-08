FROM microsoft/aspnetcore:1.1.2
ARG source=.
WORKDIR /app
EXPOSE 80
COPY $source .
ENTRYPOINT ["dotnet", "SeaGrant.Tsunami.Web.dll"]