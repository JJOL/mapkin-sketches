function Map() {
  return {
    id: Number,
    name: String,
    creatorId: Number,
    createdDate: Date,
    settings: [
      
    ],
    description: String,
    // Data
    imageFile: String,
    whiteList: [
      userId: Number
    ],
    permissions: [
      edit: [
        userId: Number
      ],
      look: [
        userId: Number
      ],
      createPoint: [
        userId: Number
      ]
    ],

    points: [
      pointId: Number
    ]

  };
}
