import Modal from "@/components/UI/Modal";
import Card from "@/components/UI/Card";
import Pagination from "@/components/UI/Pagination";

const Borrowers = () => {
  return (
    <>
      {1 + 3 == 2 && (
        <Modal details={{ title: "Account Ledger" }}>
          <div className="p-2">
            <div className="row my-2 ">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Client Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="CAPULONG, LUCHIE"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Account No.
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="01-012724"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    STATUS
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="UPDATED"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Loan Amount
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="182,715.00"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Mode of Payment
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="DAILY"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Amortization
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="1,439.00"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Date Released
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm custom-font"
                    value="2023-06-27"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Maturity Date
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm custom-font"
                    value="2023-11-27"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Term
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="5"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    SCB (Security/Collateral/Balance)
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value="90,619.00"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Outstanding Balance
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font text-danger"
                    value="162,715.00"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Arrears
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font text-danger"
                    value="-17,904.00"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    colSpan={3}
                  ></th>
                  <th
                    className="text-center bg-primary text-white fw-normal p-1 m-0"
                    colSpan={1}
                  >
                    Debit
                  </th>
                  <th
                    className="text-center bg-danger text-white fw-normal p-1 m-0"
                    colSpan={3}
                  >
                    Credit
                  </th>
                  <th
                    className="text-center bg-dark text-white fw-normal p-1 m-0"
                    colSpan={2}
                  >
                    Adjustment
                  </th>
                </tr>
                <tr className="text-dark">
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Transaction Date
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Reference No
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Particulars
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Cash Release
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Payment
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Discount
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Penalty
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Reversal
                  </th>
                  <th
                    className="text-center text-dark fw-normal p-1 m-0"
                    style={{ textTransform: "capitalize" }}
                  >
                    Out. Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    06/27/23
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    16512
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    LOAN RELEASE
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    182,715.00
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    182,715.00
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    07/01/23
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    605243
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    PAYMENT
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    10,000.00
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    172,715.00
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    07/08/23
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    607765
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    PAYMENT
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    10,000.00
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0"></td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    162,715.00
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      )}
      <div className="card mt-3">
        <Card title="Search">
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Building Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">Load</label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Deflection
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Angle of Deflection
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Status
                </label>
                <select className="form-select form-control-sm custom-font">
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  marginTop: "1.7rem",
                }}
              >
                <button className="btn btn-primary">Search</button>
                <button className="btn btn-danger">Refresh</button>
              </div>
            </div>
          </div>
        </Card>

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover">
            <thead>
              <tr style={{ textTransform: "capitalize !important" }}>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  ID
                </th>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  Building Name
                </th>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  Load
                </th>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  Deflection
                </th>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  Angle of Deflection
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Status
                </th>
                <th className="text-center bg-primary text-white fw-bold p-2 m-0">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  10.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 10
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  1000
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  0.53
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  2.85
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-green me-1">Normal</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  9.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 9
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  3000
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  99.45
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  20.37
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-red me-1">Critical</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  8.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 8
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  300
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  0.33
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  10.45
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-green me-1">Warning</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  7.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 7
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  1200
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  0.78
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  5.34
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-green me-1">Normal</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  6.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 6
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  2500
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  45.67
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  8.90
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-red me-1">Critical</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  5.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 5
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  1800
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  12.34
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  15.42
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-yellow me-1">Warning</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  4.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 4
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  900
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  0.56
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  7.32
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-green me-1">Normal</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  3.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 3
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  2100
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  0.67
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  9.45
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-yellow me-1">Warning</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  2.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 2
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  3200
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  88.34
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  25.56
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-red me-1">Critical</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  1.
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  Building 1
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  1300
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  6.78
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  12.34
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <span className="badge-green me-1">Normal</span>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button className="btn btn-warning btn-sm">Update</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Borrowers;
