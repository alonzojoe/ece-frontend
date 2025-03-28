import React from "react";

const Emails = () => {
  return (
    <div className="card mt-3">
      <div className="app-email card">
        <div className="row g-0">
          {/* Email Sidebar */}
          <div
            className="col app-email-sidebar border-end flex-grow-0"
            id="app-email-sidebar"
          >
            <div className="btn-compost-wrapper d-grid">
              <button
                className="btn btn-primary btn-compose waves-effect waves-light"
                data-bs-toggle="modal"
                data-bs-target="#emailComposeSidebar"
                id="emailComposeSidebarLabel"
              >
                Compose
              </button>
            </div>
            {/* Email Filters  */}
            <div className="email-filters py-2 ps">
              {/* Email Filters: Folder  */}
              <ul className="email-filter-folders list-unstyled mb-4">
                <li
                  className="active d-flex justify-content-between"
                  data-target="inbox"
                >
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-mail ti-sm"></i>
                    <span className="align-middle ms-2">Inbox</span>
                  </a>
                  <div className="badge bg-label-primary rounded-pill badge-center">
                    4
                  </div>
                </li>
                <li className="d-flex" data-target="sent">
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-send ti-sm"></i>
                    <span className="align-middle ms-2">Sent</span>
                  </a>
                </li>
                <li className="d-flex" data-target="draft">
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-file ti-sm"></i>
                    <span className="align-middle ms-2">Draft</span>
                  </a>
                </li>
                <li
                  className="d-flex justify-content-between"
                  data-target="starred"
                >
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-star ti-sm"></i>
                    <span className="align-middle ms-2">Starred</span>
                  </a>
                  <div className="badge bg-label-warning rounded-pill badge-center">
                    10
                  </div>
                </li>
                <li className="d-flex align-items-center" data-target="spam">
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-info-circle ti-sm"></i>
                    <span className="align-middle ms-2">Spam</span>
                  </a>
                </li>
                <li className="d-flex align-items-center" data-target="trash">
                  <a
                    href="javascript:void(0);"
                    className="d-flex flex-wrap align-items-center"
                  >
                    <i className="ti ti-trash ti-sm"></i>
                    <span className="align-middle ms-2">Trash</span>
                  </a>
                </li>
              </ul>
              {/* Email Filters: Labels  */}
              <div className="email-filter-labels">
                <small className="fw-normal text-uppercase text-muted m-4">
                  Labels
                </small>
                <ul className="list-unstyled mb-0 mt-2">
                  <li data-target="work">
                    <a href="javascript:void(0);">
                      <span className="badge badge-dot bg-success"></span>
                      <span className="align-middle ms-2">Work</span>
                    </a>
                  </li>
                  <li data-target="company">
                    <a href="javascript:void(0);">
                      <span className="badge badge-dot bg-primary"></span>
                      <span className="align-middle ms-2">Company</span>
                    </a>
                  </li>
                  <li data-target="important">
                    <a href="javascript:void(0);">
                      <span className="badge badge-dot bg-info"></span>
                      <span className="align-middle ms-2">Important</span>
                    </a>
                  </li>
                  <li data-target="private">
                    <a href="javascript:void(0);">
                      <span className="badge badge-dot bg-danger"></span>
                      <span className="align-middle ms-2">Private</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Email Filters  */}
              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  style={{ top: "0px", height: "0px" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Email Sidebar */}

          {/* Emails List  */}
          <div className="col app-emails-list">
            <div className="shadow-none border-0">
              <div className="emails-list-header p-3 py-lg-3 py-2">
                {/* Email List: Search  */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center w-100">
                    <i
                      className="ti ti-menu-2 ti-sm cursor-pointer d-block d-lg-none me-3"
                      data-bs-toggle="sidebar"
                      data-target="#app-email-sidebar"
                      data-overlay=""
                    ></i>
                    <div className="mb-0 mb-lg-2 w-100">
                      <div className="input-group input-group-merge shadow-none">
                        <span
                          className="input-group-text border-0 ps-0"
                          id="email-search"
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control email-search-input border-0"
                          placeholder="Search mail"
                          aria-label="Search mail"
                          aria-describedby="email-search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-0 mb-md-2">
                    <i className="ti ti-rotate-clockwise ti-sm rotate-180 scaleX-n1-rtl cursor-pointer email-refresh me-2"></i>
                    <div className="dropdown d-flex align-self-center">
                      <button
                        className="btn p-0"
                        type="button"
                        id="emailsActions"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical ti-sm"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="emailsActions"
                      >
                        <a className="dropdown-item" href="javascript:void(0)">
                          Mark as read
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Mark as unread
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Delete
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Archive
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mx-n3 emails-list-header-hr" />
                {/* Email List: Actions */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="form-check mb-0 me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="email-select-all"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="email-select-all"
                      ></label>
                    </div>
                    <i className="ti ti-trash ti-sm email-list-delete cursor-pointer me-2"></i>
                    <i className="ti ti-mail-opened ti-sm email-list-read cursor-pointer me-2"></i>
                    <div className="dropdown me-2">
                      <button
                        className="btn p-0"
                        type="button"
                        id="dropdownMenuFolderOne"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-folder ti-sm"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuFolderOne"
                      >
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-info-circle ti-xs me-1"></i>
                          <span className="align-middle">Spam</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-file ti-xs me-1"></i>
                          <span className="align-middle">Draft</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-trash ti-xs me-1"></i>
                          <span className="align-middle">Trash</span>
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="dropdownLabelOne"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-tag ti-sm"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownLabelOne"
                      >
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="badge badge-dot bg-success me-1"></i>
                          <span className="align-middle">Workshop</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="badge badge-dot bg-primary me-1"></i>
                          <span className="align-middle">Company</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="badge badge-dot bg-info me-1"></i>
                          <span className="align-middle">Important</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="badge badge-dot bg-danger me-1"></i>
                          <span className="align-middle">Private</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="email-pagination d-sm-flex d-none align-items-center flex-wrap justify-content-between justify-sm-content-end">
                    <span className="d-sm-block d-none mx-3 text-muted">
                      1-10 of 653
                    </span>
                    <i className="email-prev ti ti-chevron-left ti-sm scaleX-n1-rtl cursor-pointer text-muted me-2"></i>
                    <i className="email-next ti ti-chevron-right ti-sm scaleX-n1-rtl cursor-pointer"></i>
                  </div>
                </div>
              </div>
              <hr className="container-m-nx m-0" />
              {/* Email List: Items */}
              <div className="email-list pt-0 ps ps--active-y">
                <ul className="list-unstyled m-0">
                  <li
                    className="email-list-item"
                    data-starred="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-1"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/1.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Chandler Bing
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Focused impactful open issues from the project of
                          GitHub
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-danger d-none d-md-inline-block me-2"
                          data-label="private"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          08:40 AM
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-read">
                            <i className="ti ti-mail-opened ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-sent="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-2"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Ross Geller
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Dessert soufflé tootsie roll soufflé carrot
                          cake halvah jelly.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-info d-none d-md-inline-block me-2"
                          data-label="important"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          10:12 AM
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item"
                    data-draft="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-3"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <div className="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-2">
                        <span className="avatar-initial rounded-circle bg-label-success">
                          BS
                        </span>
                      </div>
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Barney Stinson
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Soufflé apple pie caramels soufflé tiramisu
                          bear claw.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span className="email-list-item-attachment ti ti-paperclip ti-xs cursor-pointer me-2 float-end float-sm-none"></span>
                        <span
                          className="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2"
                          data-label="company"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          12:44 AM
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-read">
                            <i className="ti ti-mail-opened ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-starred="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-4"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Pheobe Buffay
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Tart croissant jujubes gummies macaroon
                          Icing sweet.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-success d-none d-md-inline-block me-2"
                          data-label="work"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          Yesterday
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-spam="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-5"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Ted Mosby
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, I love Pudding cookie chocolate sweet
                          tiramisu jujubes I love danish.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2"
                          data-label="company"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          Yesterday
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item"
                    data-trash="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-6"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <div className="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-2">
                        <span className="avatar-initial rounded-circle bg-label-info">
                          Sk
                        </span>
                      </div>
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Stacy Cooper
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, I love danish. Cupcake I love carrot cake
                          sugar plum I love.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-info d-none d-md-inline-block me-2"
                          data-label="work"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          5 May
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-read">
                            <i className="ti ti-mail-opened ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-draft="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-7"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Rachel Green
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Chocolate cake pudding chocolate bar ice
                          cream bonbon lollipop.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2"
                          data-label="company"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          15 May
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-starred="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-8"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Grace Shelby
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Icing gummi bears ice cream croissant
                          dessert wafer.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span className="email-list-item-attachment ti ti-paperclip ti-xs cursor-pointer me-2 float-end float-sm-none"></span>
                        <span
                          className="email-list-item-label badge badge-dot bg-danger d-none d-md-inline-block me-2"
                          data-label="private"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          20 Apr
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-spam="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-9"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <div className="avatar avatar-sm d-block flex-shrink-0 me-sm-3 me-2">
                        <span className="avatar-initial rounded-circle bg-label-danger">
                          JF
                        </span>
                      </div>
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Jacob Frye
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, Chocolate cake pudding chocolate bar ice
                          cream Sweet.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-info d-none d-md-inline-block me-2"
                          data-label="important"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          25 Mar
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="email-list-item email-marked-read"
                    data-trash="true"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  >
                    <div className="d-flex align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="email-list-item-input form-check-input"
                          type="checkbox"
                          id="email-10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="email-10"
                        ></label>
                      </div>
                      <i className="email-list-item-bookmark ti ti-star ti-sm d-sm-inline-block d-none cursor-pointer ms-2 me-3"></i>
                      <img
                        src="../../assets/img/avatars/2.png"
                        alt="user-avatar"
                        className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                        height="32"
                        width="32"
                      />
                      <div className="email-list-item-content ms-2 ms-sm-0 me-2">
                        <span className="h6 email-list-item-username me-2">
                          Alistair Crowley{" "}
                        </span>
                        <span className="email-list-item-subject d-xl-inline-block d-block">
                          Hey Katy, I love danish. Cupcake I love carrot cake
                          sugar plum I love.
                        </span>
                      </div>
                      <div className="email-list-item-meta ms-auto d-flex align-items-center">
                        <span
                          className="email-list-item-label badge badge-dot bg-primary d-none d-md-inline-block me-2"
                          data-label="company"
                        ></span>
                        <small className="email-list-item-time text-muted">
                          25 Feb
                        </small>
                        <ul className="list-inline email-list-item-actions text-nowrap">
                          <li className="list-inline-item email-unread">
                            <i className="ti ti-mail ti-sm"></i>
                          </li>
                          <li className="list-inline-item email-delete">
                            <i className="ti ti-trash ti-sm"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="ti ti-archive ti-sm"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled m-0">
                  <li className="email-list-empty text-center d-none">
                    No items found.
                  </li>
                </ul>
                <div
                  className="ps__rail-x"
                  style={{ left: "0px", bottom: "0px" }}
                >
                  <div
                    className="ps__thumb-x"
                    tabIndex="0"
                    style={{ left: "0px", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: "0px", height: "605px", right: "0px" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex="0"
                    style={{ top: "0px", height: "600px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-x"
                  style={{ left: "0px", bottom: "0px" }}
                >
                  <div
                    className="ps__thumb-x"
                    tabIndex="0"
                    style={{ left: "0px", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: "0px", height: "605px", right: "0px" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex="0"
                    style={{ top: "0px", height: "600px" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="app-overlay"></div>
          </div>
          {/* /Emails List  */}

          {/* Email View  */}
          <div
            className="col app-email-view flex-grow-0 bg-body"
            id="app-email-view"
          >
            <div className="card shadow-none border-0 rounded-0 app-email-view-header p-3 py-md-3 py-2">
              {/* Email View : Title  bar */}
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center overflow-hidden">
                  <i
                    className="ti ti-chevron-left ti-sm cursor-pointer me-2"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  ></i>
                  <h6 className="text-truncate mb-0 me-2">
                    Focused impactful open issues
                  </h6>
                  <span className="badge bg-label-danger rounded-pill">
                    Private
                  </span>
                </div>
                {/* Email View : Action  bar */}
                <div className="d-flex align-items-center">
                  <i className="ti ti-printer ti-sm mt-1 cursor-pointer d-sm-block d-none"></i>
                  <div className="dropdown ms-3">
                    <button
                      className="btn p-0"
                      type="button"
                      id="dropdownMoreOptions"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots-vertical ti-sm"></i>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMoreOptions"
                    >
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-mail ti-xs me-1"></i>
                        <span className="align-middle">Mark as unread</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-mail-opened ti-xs me-1"></i>
                        <span className="align-middle">Mark as unread</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-star ti-sm me-1"></i>
                        <span className="align-middle">Add star</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-calendar ti-xs me-1"></i>
                        <span className="align-middle">Create Event</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-volume-off ti-xs me-1"></i>
                        <span className="align-middle">Mute</span>
                      </a>
                      <a
                        className="dropdown-item d-sm-none d-block"
                        href="javascript:void(0)"
                      >
                        <i className="ti ti-printer ti-xs me-1"></i>
                        <span className="align-middle">Print</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="app-email-view-hr mx-n3 mb-2" />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i
                    className="ti ti-trash ti-sm cursor-pointer me-3"
                    data-bs-toggle="sidebar"
                    data-target="#app-email-view"
                  ></i>
                  <i className="ti ti-mail-opened ti-sm cursor-pointer me-3"></i>
                  <div className="dropdown me-3">
                    <button
                      className="btn p-0"
                      type="button"
                      id="dropdownMenuFolderTwo"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti ti-folder ti-sm"></i>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuFolderTwo"
                    >
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-info-circle ti-xs me-1"></i>
                        <span className="align-middle">Spam</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-pencil ti-xs me-1"></i>
                        <span className="align-middle">Draft</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="ti ti-trash ti-xs me-1"></i>
                        <span className="align-middle">Trash</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown me-3">
                    <button
                      className="btn p-0"
                      type="button"
                      id="dropdownLabelTwo"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti ti-tag ti-sm"></i>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownLabelTwo"
                    >
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="badge badge-dot bg-success me-1"></i>
                        <span className="align-middle">Workshop</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="badge badge-dot bg-primary me-1"></i>
                        <span className="align-middle">Company</span>
                      </a>
                      <a className="dropdown-item" href="javascript:void(0)">
                        <i className="badge badge-dot bg-info me-1"></i>
                        <span className="align-middle">Important</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap justify-content-end">
                  <span className="d-sm-block d-none mx-3 text-muted">
                    1-10 of 653
                  </span>
                  <i className="ti ti-chevron-left ti-sm scaleX-n1-rtl cursor-pointer text-muted me-2"></i>
                  <i className="ti ti-chevron-right ti-sm scaleX-n1-rtl cursor-pointer"></i>
                </div>
              </div>
            </div>
            <hr className="m-0" />
            {/* Email View : Content */}
            <div className="app-email-view-content py-4 ps ps--active-y">
              <p className="email-earlier-msgs text-center text-muted cursor-pointer mb-5">
                1 Earlier Message
              </p>
              {/* Email View : Previous mails */}
              <div className="card email-card-prev mx-sm-4 mx-3">
                <div className="card-header d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex align-items-center mb-sm-0 mb-3">
                    <img
                      src="../../assets/img/avatars/2.png"
                      alt="user-avatar"
                      className="flex-shrink-0 rounded-circle me-3"
                      height="40"
                      width="40"
                    />
                    <div className="flex-grow-1 ms-1">
                      <h6 className="m-0">Ross Geller</h6>
                      <small className="text-muted">rossGeller@email.com</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3 text-muted">
                      June 20th 2020, 08:30 AM
                    </p>
                    <i className="ti ti-paperclip cursor-pointer me-2"></i>
                    <i className="email-list-item-bookmark ti ti-star ti-sm cursor-pointer me-2"></i>
                    <div className="dropdown me-3 d-flex align-self-center">
                      <button
                        className="btn p-0"
                        type="button"
                        id="dropdownEmailOne"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownEmailOne"
                      >
                        <a
                          className="dropdown-item scroll-to-reply"
                          href="javascript:void(0)"
                        >
                          <i className="ti ti-corner-up-left me-1"></i>
                          <span className="align-middle">Reply</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-corner-up-right me-1"></i>
                          <span className="align-middle">Forward</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-alert-octagon me-1"></i>
                          <span className="align-middle">Report</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="fw-medium">Greetings!</p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here',making it look like
                    readable English.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <p className="mb-0">Sincerely yours,</p>
                  <p className="fw-medium mb-0">Envato Design Team</p>
                  <hr />
                  <p className="email-attachment-title mb-2">Attachments</p>
                  <div className="cursor-pointer">
                    <i className="ti ti-file"></i>
                    <span className="align-middle ms-1">report.xlsx</span>
                  </div>
                </div>
              </div>
              {/* Email View : Last mail */}
              <div className="card email-card-last mx-sm-4 mx-3 mt-4">
                <div className="card-header d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex align-items-center mb-sm-0 mb-3">
                    <img
                      src="../../assets/img/avatars/2.png"
                      alt="user-avatar"
                      className="d-block flex-shrink-0 rounded-circle me-sm-3 me-2"
                      height="32"
                      width="32"
                    />
                    <div className="flex-grow-1 ms-1">
                      <h6 className="m-0">Chandler Bing</h6>
                      <small className="text-muted">iAmAhoot@email.com</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3 text-muted">
                      June 20th 2020, 08:10 AM
                    </p>
                    <i className="ti ti-paperclip cursor-pointer me-2"></i>
                    <i className="email-list-item-bookmark ti ti-star ti-sm cursor-pointer me-2"></i>
                    <div className="dropdown me-3 d-flex align-self-center">
                      <button
                        className="btn p-0"
                        type="button"
                        id="dropdownEmailTwo"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownEmailTwo"
                      >
                        <a
                          className="dropdown-item scroll-to-reply"
                          href="javascript:void(0)"
                        >
                          <i className="ti ti-corner-up-left me-1"></i>
                          <span className="align-middle">Reply</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-corner-up-right me-1"></i>
                          <span className="align-middle">Forward</span>
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          <i className="ti ti-alert-octagon me-1"></i>
                          <span className="align-middle">Report</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="fw-medium">Greetings!</p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here',making it look like
                    readable English.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <p className="mb-0">Sincerely yours,</p>
                  <p className="fw-medium mb-0">Envato Design Team</p>
                  <hr />
                  <p className="email-attachment-title mb-2">Attachments</p>
                  <div className="cursor-pointer">
                    <i className="ti ti-file"></i>
                    <span className="align-middle ms-1">report.xlsx</span>
                  </div>
                </div>
              </div>
              {/* Email View : Reply mail */}
              <div className="email-reply card mt-4 mx-sm-4 mx-3">
                <h6 className="card-header border-0">Reply to Ross Geller</h6>
                <div className="card-body pt-0 px-3">
                  <div className="d-flex justify-content-start">
                    <div className="email-reply-toolbar border-0 w-100 ps-0 ql-toolbar ql-snow">
                      <span className="ql-formats me-0">
                        <button className="ql-bold" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                            ></path>{" "}
                            <path
                              className="ql-stroke"
                              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button className="ql-italic" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="13"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="5"
                              x2="11"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="8"
                              x2="10"
                              y1="14"
                              y2="4"
                            ></line>{" "}
                          </svg>
                        </button>
                        <button className="ql-underline" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                            ></path>{" "}
                            <rect
                              className="ql-fill"
                              height="1"
                              rx="0.5"
                              ry="0.5"
                              width="12"
                              x="3"
                              y="15"
                            ></rect>{" "}
                          </svg>
                        </button>
                        <button
                          className="ql-list"
                          value="ordered"
                          type="button"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="15"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke ql-thin"
                              x1="2.5"
                              x2="4.5"
                              y1="5.5"
                              y2="5.5"
                            ></line>{" "}
                            <path
                              className="ql-fill"
                              d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                            ></path>{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                            ></path>{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button
                          className="ql-list"
                          value="bullet"
                          type="button"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="6"
                              x2="15"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="3"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                          </svg>
                        </button>
                        <button className="ql-link" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="7"
                              x2="11"
                              y1="7"
                              y2="11"
                            ></line>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                            ></path>{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                            ></path>{" "}
                          </svg>
                        </button>
                        <button className="ql-image" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <rect
                              className="ql-stroke"
                              height="10"
                              width="12"
                              x="3"
                              y="4"
                            ></rect>{" "}
                            <circle
                              className="ql-fill"
                              cx="6"
                              cy="7"
                              r="1"
                            ></circle>{" "}
                            <polyline
                              className="ql-even ql-fill"
                              points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                            ></polyline>{" "}
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="email-reply-editor ql-container ql-snow">
                    <div
                      className="ql-editor ql-blank"
                      data-gramm="false"
                      contentEditable="true"
                      data-placeholder="Write your message... "
                    >
                      <p>
                        <br />
                      </p>
                    </div>
                    <div
                      className="ql-clipboard"
                      contentEditable="true"
                      tabIndex="-1"
                    ></div>
                    <div className="ql-tooltip ql-hidden">
                      <a
                        className="ql-preview"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="about:blank"
                      ></a>
                      <input
                        type="text"
                        data-formula="e=mc^2"
                        data-link="https://quilljs.com"
                        data-video="Embed URL"
                      />
                      <a className="ql-action"></a>
                      <a className="ql-remove"></a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="me-3">
                      <label className="cursor-pointer" htmlFor="attach-file-1">
                        <i className="ti ti-paperclip me-2"></i>
                        <span className="align-middle">Attachments</span>
                      </label>
                      <input
                        type="file"
                        name="file-input"
                        className="d-none"
                        id="attach-file-1"
                      />
                    </div>
                    <button className="btn btn-primary waves-effect waves-light">
                      <i className="ti ti-send ti-xs me-1"></i>
                      <span className="align-middle">Send</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0px", height: "603px", right: "0px" }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  style={{ top: "0px", height: "520px" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Email View */}
        </div>

        {/* Compose Email  */}
        <div
          className="app-email-compose modal"
          id="emailComposeSidebar"
          tabIndex="-1"
          aria-labelledby="emailComposeSidebarLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog m-0 me-md-4 mb-4 modal-lg">
            <div className="modal-content p-0">
              <div className="modal-header py-3 bg-body">
                <h5 className="modal-title fs-5">Compose Mail</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body flex-grow-1 pb-sm-0 p-4 py-2">
                <form className="email-compose-form">
                  <div className="email-compose-to d-flex justify-content-between align-items-center">
                    <label className="form-label mb-0" htmlFor="emailContacts">
                      To:
                    </label>
                    <div className="select2-primary border-0 shadow-none flex-grow-1 mx-2">
                      <div className="position-relative">
                        <select
                          className="select2 select-email-contacts form-select select2-hidden-accessible"
                          id="emailContacts"
                          name="emailContacts"
                          multiple=""
                          data-select2-id="emailContacts"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option data-avatar="1.png" value="Jane Foster">
                            Jane Foster
                          </option>
                          <option data-avatar="3.png" value="Donna Frank">
                            Donna Frank
                          </option>
                          <option
                            data-avatar="5.png"
                            value="Gabrielle Robertson"
                          >
                            Gabrielle Robertson
                          </option>
                          <option data-avatar="7.png" value="Lori Spears">
                            Lori Spears
                          </option>
                          <option data-avatar="9.png" value="Sandy Vega">
                            Sandy Vega
                          </option>
                          <option data-avatar="11.png" value="Cheryl May">
                            Cheryl May
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="1"
                          style={{ width: "auto" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--multiple"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex="-1"
                              aria-disabled="false"
                            >
                              <ul className="select2-selection__rendered">
                                <li className="select2-search select2-search--inline">
                                  <input
                                    className="select2-search__field"
                                    type="search"
                                    tabIndex="0"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="none"
                                    spellCheck="false"
                                    role="searchbox"
                                    placeholder="Select value"
                                    style={{ width: "0px" }}
                                  />
                                </li>
                              </ul>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="email-compose-toggle-wrapper">
                      <a
                        className="email-compose-toggle-cc"
                        href="javascript:void(0);"
                      >
                        Cc |
                      </a>
                      <a
                        className="email-compose-toggle-bcc"
                        href="javascript:void(0);"
                      >
                        Bcc
                      </a>
                    </div>
                  </div>

                  <div className="email-compose-cc d-none">
                    <hr className="container-m-nx my-2" />
                    <div className="d-flex align-items-center">
                      <label htmlFor="email-cc" className="form-label mb-0">
                        Cc:{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 shadow-none flex-grow-1 mx-2"
                        id="email-cc"
                        placeholder="someone@email.com"
                      />
                    </div>
                  </div>
                  <div className="email-compose-bcc d-none">
                    <hr className="container-m-nx my-2" />
                    <div className="d-flex align-items-center">
                      <label htmlFor="email-bcc" className="form-label mb-0">
                        Bcc:{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 shadow-none flex-grow-1 mx-2"
                        id="email-bcc"
                        placeholder="someone@email.com"
                      />
                    </div>
                  </div>
                  <hr className="container-m-nx my-2" />
                  <div className="email-compose-subject d-flex align-items-center mb-2">
                    <label htmlFor="email-subject" className="form-label mb-0">
                      Subject:
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 shadow-none flex-grow-1 mx-2"
                      id="email-subject"
                      placeholder="Project Details"
                    />
                  </div>
                  <div className="email-compose-message container-m-nx">
                    <div className="d-flex justify-content-end">
                      <div className="email-editor-toolbar border-bottom-0 w-100 ql-toolbar ql-snow">
                        <span className="ql-formats me-0">
                          <button className="ql-bold" type="button">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <path
                                className="ql-stroke"
                                d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                              ></path>{" "}
                              <path
                                className="ql-stroke"
                                d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                              ></path>{" "}
                            </svg>
                          </button>
                          <button className="ql-italic" type="button">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="13"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="5"
                                x2="11"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="8"
                                x2="10"
                                y1="14"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </button>
                          <button className="ql-underline" type="button">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <path
                                className="ql-stroke"
                                d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                              ></path>{" "}
                              <rect
                                className="ql-fill"
                                height="1"
                                rx="0.5"
                                ry="0.5"
                                width="12"
                                x="3"
                                y="15"
                              ></rect>{" "}
                            </svg>
                          </button>
                          <button
                            className="ql-list"
                            value="ordered"
                            type="button"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="15"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke ql-thin"
                                x1="2.5"
                                x2="4.5"
                                y1="5.5"
                                y2="5.5"
                              ></line>{" "}
                              <path
                                className="ql-fill"
                                d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                              ></path>{" "}
                              <path
                                className="ql-stroke ql-thin"
                                d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                              ></path>{" "}
                              <path
                                className="ql-stroke ql-thin"
                                d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                              ></path>{" "}
                            </svg>
                          </button>
                          <button
                            className="ql-list"
                            value="bullet"
                            type="button"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="6"
                                x2="15"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="3"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                            </svg>
                          </button>
                          <button className="ql-link" type="button">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="7"
                                x2="11"
                                y1="7"
                                y2="11"
                              ></line>{" "}
                              <path
                                className="ql-even ql-stroke"
                                d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                              ></path>{" "}
                              <path
                                className="ql-even ql-stroke"
                                d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                              ></path>{" "}
                            </svg>
                          </button>
                          <button className="ql-image" type="button">
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <rect
                                className="ql-stroke"
                                height="10"
                                width="12"
                                x="3"
                                y="4"
                              ></rect>{" "}
                              <circle
                                className="ql-fill"
                                cx="6"
                                cy="7"
                                r="1"
                              ></circle>{" "}
                              <polyline
                                className="ql-even ql-fill"
                                points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                              ></polyline>{" "}
                            </svg>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="email-editor ql-container ql-snow">
                      <div
                        className="ql-editor ql-blank"
                        data-gramm="false"
                        contentEditable="true"
                        data-placeholder="Write your message... "
                      >
                        <p>
                          <br />
                        </p>
                      </div>
                      <div
                        className="ql-clipboard"
                        contentEditable="true"
                        tabIndex="-1"
                      ></div>
                      <div className="ql-tooltip ql-hidden">
                        <a
                          className="ql-preview"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="about:blank"
                        ></a>
                        <input
                          type="text"
                          data-formula="e=mc^2"
                          data-link="https://quilljs.com"
                          data-video="Embed URL"
                        />
                        <a className="ql-action"></a>
                        <a className="ql-remove"></a>
                      </div>
                    </div>
                  </div>
                  <hr className="container-m-nx mt-0 mb-2" />
                  <div className="email-compose-actions d-flex justify-content-between align-items-center mt-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="btn-group">
                        <button
                          type="reset"
                          className="btn btn-primary waves-effect waves-light"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="ti ti-send ti-xs me-1"></i>Send
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="visually-hidden">Send Options</span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Schedule send
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Save draft
                            </a>
                          </li>
                        </ul>
                      </div>
                      <label htmlFor="attach-file">
                        <i className="ti ti-paperclip cursor-pointer ms-2"></i>
                      </label>
                      <input
                        type="file"
                        name="file-input"
                        className="d-none"
                        id="attach-file"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="dropdownMoreActions"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMoreActions"
                        >
                          <li>
                            <button type="button" className="dropdown-item">
                              Add Label
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              Plain text mode
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              Print
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              Check Spelling
                            </button>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="reset"
                        className="btn"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="ti ti-trash"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Compose Email */}
      </div>
    </div>
  );
};

export default Emails;
