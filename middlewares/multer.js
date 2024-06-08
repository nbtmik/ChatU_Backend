// import multer from "multer";

// const multerUpload = multer({
//     limits:{
//         fileSize:1024*1024*5,
//     },
// });

// const singleAvatar = multerUpload.single("avatar");

// const attachmentsMulter = multerUpload.array("files",5);

// export {singleAvatar, attachmentsMulter};

import multer from "multer";

//limit for file in mb
const multerUpload = multer({
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

const singleAvatar = multerUpload.single("avatar");

const attachmentsMulter = multerUpload.array("files", 5);

export { singleAvatar, attachmentsMulter };