import Modal from "@/components/UI/Modal";
import Card from "@/components/UI/Card";
import Pagination from "@/components/UI/Pagination";

const Borrowers = () => {
  return (
    <>
      {1 + 1 == 2 && (
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
                  Account No.
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
                  Last Name
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
                  First Name
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
                  Middle Name
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
                  Date From
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Date To
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm custom-font"
                />
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
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Account No.
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Transaction Date & Time
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Client Name
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Term
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  View Ledger
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Options
                </th>
                <th className="text-center bg-primary text-white fw-bold p-1 m-0">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012724
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  June 27, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  CAPULONG, LUCHIE
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  5 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012725
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  June 28, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  GARCIA, JUAN
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  6 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012726
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 01, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  SMITH, JOHN
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  3 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012727
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 02, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  DIAZ, MICHAEL
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  9 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012728
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 03, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  BROWN, EMILY
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  5 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012729
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 04, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  JOHNSON, LUCAS
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  8 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012730
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 05, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  CLARK, LUCY
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  4 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012731
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 06, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  MARTINEZ, ISABEL
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  9 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>

              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012732
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 07, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  GONZALEZ, DAVID
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  7 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  01-012733
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  July 08, 2024
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  SANTOS, ANA
                </td>{" "}
                {/* Filipino name */}
                <td className="text-center align-middle fw-normal p-1 m-0">
                  2 Months
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-dark btn-sm">
                    Account Ledger
                  </button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  UPDATED
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
