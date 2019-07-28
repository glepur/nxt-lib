module.exports = {
  err: err => {
    const obj = {
      type: err.constructor.name,
      message: err.message,
      stack: err.stack,
      data: err.data
    }

    for (var key in err) {
      const val = err[key]
      if (obj[key] === undefined && typeof val !== 'object') {
        obj[key] = val
      }
    }

    return obj
  },
  res: res => ({
    id: res.id || (res.req && res.req.id),
    statusCode: res.statusCode,
    bytesWritten: res.bytesWritten,
    headers: typeof res.getHeaders === 'function' ? res.getHeaders() : res.headers
  }),
  req: req => ({
    id: req.id || (req.headers && req.headers['request-id']),
    method: req.method,
    url: req.url,
    headers: req.headers,
    bytesRead: req.bytesRead,
    remoteAddress: req.socket && req.socket.remoteAddress,
    remotePort: req.socket && req.socket.remotePort
  }),
  ures: ures => ({
    id: ures.id || (ures.req && ures.req.id),
    statusCode: ures.statusCode,
    bytesRead: ures.bytesRead,
    headers: typeof ures.getHeaders === 'function' ? ures.getHeaders() : ures.headers
  }),
  ureq: ureq => ({
    id: ureq.id || (ureq.headers && ureq.headers['request-id']),
    method: ureq.method,
    path: ureq.path,
    hostname: ureq.hostname,
    timeout: ureq.timeout,
    port: ureq.port,
    bytesWritten: ureq.bytesWritten,
    headers: ureq.headers
  })
}
