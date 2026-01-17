enum UserType {
  doctor,
  client;

  String get tr => (name == client.name) ? "Client" : "Doctor";
}