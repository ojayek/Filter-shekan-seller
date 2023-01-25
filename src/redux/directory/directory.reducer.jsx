/** @format */

const INITIAL_STATE = {
  sections: [
    {
      title: "androids",
      imageUrl: "https://picsum.photos/id/1/300/300",
      id: 1,
      linkUrl: "shop/androids",
    },
    {
      title: "iphonesimulator",
      imageUrl: "https://picsum.photos/id/2/300/300",
      id: 2,
      linkUrl: "shop/iphones",
    },
    {
      title: "windows",
      imageUrl: "https://picsum.photos/id/3/300/300",
      id: 3,
      linkUrl: "shop/windows",
    },
    {
      title: "windows02",
      imageUrl: "https://picsum.photos/id/4/300/300",
      size: "large",
      id: 4,
      linkUrl: "shop/macos",
    },
    {
      title: "vless",
      imageUrl: "https://picsum.photos/id/5/300/300",
      size: "large",
      id: 5,
      linkUrl: "shop/vlasses",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
