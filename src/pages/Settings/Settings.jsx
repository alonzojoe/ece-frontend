import List from "./components/List";
import Swal from "sweetalert2";
const POSITIONS = [
  {
    id: 1,
    name: "Admin",
    total: 1,
  },
  {
    id: 2,
    name: "Architect",
    total: 5,
  },
  {
    id: 3,
    name: "Engineer",
    total: 3,
  },
  {
    id: 4,
    name: "Electrical",
    total: 6,
  },
  {
    id: 5,
    name: "Others",
    total: 10,
  },
];

const Settings = () => {
  const addNew = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
              https://api.github.com/users/${login}
            `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
              Request failed: ${error}
            `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  return (
    <div className="card mt-3">
      <div className="mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-4">List of Positions</h4>
          <button className="btn btn-primary" onClick={addNew}>
            <i className="ti ti-plus"></i> Add New
          </button>
        </div>
        <p className="mb-4">A role based list of positions.</p>
      </div>
      <div className="row my-2 mb-5 mx-3">
        <List positions={POSITIONS} />
      </div>
    </div>
  );
};

export default Settings;
