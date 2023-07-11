import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dismissible?: boolean;
  onClose: () => void;
}

const Alert = ({ children, dismissible = false, onClose }: Props) => {
  let classes = "alert alert-primary fade show";
  if (dismissible) {
    classes += " alert-dismissible";
  }
  return (
    <div className={classes} role="alert">
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      )}
    </div>
  );
};

export default Alert;
