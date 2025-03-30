import Loader from "@/components/UI/Loader";

const List = ({ positions, onUpdate, isLoading }) => {
  if (isLoading || !positions?.data) {
    return <Loader />;
  }

  return (
    <>
      {positions.data.map((p) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={p.id}>
          <ListItem position={p} onUpdate={onUpdate} />
        </div>
      ))}
    </>
  );
};

const ListItem = ({ position, onUpdate }) => {
  return (
    <div className="card border border">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="fw-normal mb-2">Total users: {position.total}</h6>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-1">
          <div className="role-heading">
            <h4 className="mb-1">{position.name}</h4>
            <div className="cursor-pointer text-primary role-edit-modal">
              <span onClick={() => onUpdate(position)}>Edit Role</span>
            </div>
          </div>
          {/* <a href="javascript:void(0);" className="text-muted">
                    <i className="ti ti-copy ti-md"></i>
                  </a> */}
        </div>
      </div>
    </div>
  );
};

export default List;
