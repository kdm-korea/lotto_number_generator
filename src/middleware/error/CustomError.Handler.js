import CustomError from '../../component/exception/Custom.Error';

const customErrorHanlder = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.status).json({ message: err.message });
  }
  console.log(err.message);
};

export default customErrorHanlder;
