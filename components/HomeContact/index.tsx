import React, { useState } from "react";
import { imagePath } from "../../config";
import { Input } from "../RegisterTry";
// import { withTranslation } from "../../i18n";
// import { registerTry } from "../../api";
import swal from "sweetalert";
import useTrans from "../../common/useTrans";

function HomeContact(props) {
  const trans = useTrans().landingPage
  const [form, setForm] = useState({
    service: "Nhà thuốc",
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
        //   name: form.fullName,
        //   email: form.email,
        //   phone: form.phoneNumber,
        //   service: form.service
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

  return (
    <div className="home-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex flex-column justify-content-center left">
            <div className="common-title-section dash-left">
              {trans.contact_title}
            </div>
            <br />
            <div className="common-text-medium">{trans.contact_content}</div>
          </div>
          <div className="col-md-7 form-contact d-flex flex-column align-items-center" id="form-register">
            <div className="form-title">{trans.register_now}</div>
            <div className="input common-input" style={{ paddingLeft: 20 }}>
              <select
                onChange={e => {
                  updateForm({ service: e.target.value });
                }}
              >
                <option value="Nhà thuốc">{trans.title_product_1}</option>
                <option value="Công ty dược">{trans.title_product_2}</option>
                <option value="Người dùng mua thuốc">{trans.person_buy_drug}</option>
              </select>
            </div>
            <Input
              className="input"
              value={form.fullName}
              onChange={v => {
                updateForm({ fullName: v });
              }}
              placeholder={trans.full_name}
            />
            <Input
              className="input"
              value={form.email}
              onChange={v => {
                updateForm({ email: v });
              }}
              placeholder="Email"
            />
            <Input
              className="input"
              value={form.phoneNumber}
              onChange={v => {
                updateForm({ phoneNumber: v });
              }}
              placeholder={trans.phone_number}
            />
            <div className="btn common-text-medium btn-hover btn-bg" onClick={onRegister}>
              {loading ? (
                <i className="fas fa-circle-notch fa-spin"></i>
              ) : (
                trans.send_information
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-item-center">
          <img src={`${imagePath}/bg_register_try.png`} />
        </div>
      </div>
    </div>
  );
}

export default HomeContact
