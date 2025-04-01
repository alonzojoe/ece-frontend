import Loader from "@/components/UI/Loader";

const List = ({ positions, onUpdate, isLoading, onDelete }) => {
  if (isLoading || !positions?.data) {
    return <Loader />;
  }

  return (
    <>
      {positions.data.map((p) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={p.id}>
          <ListItem position={p} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

const ListItem = ({ position, onUpdate, onDelete }) => {
  return (
    <div className="card border border">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="fw-normal mb-2">
            Total users: {position.users_count}
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-1">
          <div className="role-heading">
            <h4 className="mb-1">{position.name}</h4>
            <div className="cursor-pointer text-primary role-edit-modal">
              <span onClick={() => onUpdate(position)}>Edit Role</span>
            </div>
          </div>
          {position.id !== 1 && (
            <span
              className="cursor-pointer text-danger"
              onClick={() => onDelete(position.id)}
            >
              <i className="ti ti-trash ti-md"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
