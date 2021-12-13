import React, { useState } from "react";
// import { withTranslation } from "./../../i18n";
// import { registerTry } from "../../api";
import swal from "sweetalert";
import { imagePath } from "../../config";

type TypeRegisterTry = {
  t?: any;
  company?: boolean;
  title?: string;
  checkList?: any[];
  service?: string;
};

type TypeInput = {
  value: string;
  onChange: (text) => void;
  placeholder: string;
  className?: string;
};

const list = ["check-list-1", "check-list-2", "check-list-3", "check-list-4"];

export const Input = (props: TypeInput) => {
  const [focus, setFocus] = useState(false);

  const { placeholder, onChange, value = "", className = "" } = props;
  return (
    <div className={className + " common-input"}>
      <div
        className={`common-input-placeholder ${(focus || value) != "" &&
          "placeholder-focus"}`}
      >
        {placeholder}
      </div>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

function RegisterTry(props: TypeRegisterTry) {
  const {
    t,
    company,
    title = t("register-try"),
    checkList = list.map(e => t(e)),
    service = "quản lý nhà thuốc"
  } = props;
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phoneNumber: ""
  });
  const [loading, setLoading] = useState(false);

  const updateForm = data => {
    setForm({ ...form, ...data });
  };

  const onRegister = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (form.fullName != "" && form.email !== "" && form.phoneNumber !== "") {
        // await registerTry({
        //   company_name: form.companyName,
        //   name: form.fullName,
        //   email: form.email,
        //   phone: form.phoneNumber,
        //   service: service
        // });
        swal({
          text:
            "Đăng ký thành công, chúng tôi sẽ liên hệ với bạn trong 24 giờ tới!",
          icon: "success"
        });
      } else {
        swal({
          text: "Vui lòng nhập thông tin",
          icon: "warning"
        });
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const renderCheckList = () =>
    checkList.map((e, i) => (
      <div key={i} className="common-text-medium mv d-flex align-items-center">
        <img
          src={`${imagePath}/circle_checked.png`}
          className="mr"
        />
        {e}
      </div>
    ));

  const renderForm = () => {
    return (
      <div className="col-md-4">
        <Input
          className="mv"
          value={form.companyName}
          onChange={v => {
            updateForm({ companyName: v });
          }}
          placeholder={t("companyName")}
        />
        <Input
          className="mv"
          value={form.fullName}
          onChange={v => {
            updateForm({ fullName: v });
          }}
          placeholder={t("fullName")}
        />
        <Input
          className="mv"
          value={form.email}
          onChange={v => {
            updateForm({ email: v });
          }}
          placeholder="Email"
        />
        <Input
          className="mv"
          value={form.phoneNumber}
          onChange={v => {
            updateForm({ phoneNumber: v });
          }}
          placeholder={t("phoneNumber")}
        />
        <div className="btn-register mv btn-hover btn-bg" onClick={onRegister}>
          {loading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            t("register-now")
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="register-try" id="form-register">
      <div className="container">
        <div className="common-title-section">{title}</div>
        <div className="common-text-medium text-center d-none d-sm-block free-30-d">
          {t("30day-free-trailer")}
        </div>
        <div className="row">
          <div className="col-md-8">{renderCheckList()}</div>
          {renderForm()}
        </div>
        {!company && (
          <img
            className="bg-register-try"
            src={`${imagePath}/bg_register_try.png`}
          />
        )}
      </div>
    </div>
  );
}

export default RegisterTry as React.FC<
  TypeRegisterTry
>;
