module.exports = {
  errorResponse: (res, code, message) => {
    return res.status(code).json({ success: "error", message });
  },
};
