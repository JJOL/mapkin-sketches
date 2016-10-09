function User() {
  id: Number,
  // Profile
  name: String,
  // Credentials
  mail: String,
  password: String,

  // Settings
  gui: [
    mapDrawerBarPlace: Number
  ],

  // Data
  maps: [
    mapId: Number
  ],
  friends: [
    friendId: Number
  ],
  taggedMaps: [
    mapId: Number
  ],
  lastMap: Number
}
