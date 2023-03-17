import React from 'react'

const Modal = () => {
    return (
        <div>
            {/* ========= modal ========= */}
            <section className="modal fade" id="exampleModal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-2 fw-bold primary_color">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label weight_500">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label weight_500">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label weight_500">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                                </div>
                                <p className="mt-3">
                                    Please fill out your information above to register
                                </p>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label fw-bold" htmlFor="exampleCheck1">
                                        <p className="font_weight_3">Accept terms &amp; conditions</p>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0">
                            <button className="btn btn_1 py-2 px-4 rounded-pill fw-bold">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modal
