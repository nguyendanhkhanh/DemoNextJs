import React, { ReactElement } from 'react'

interface Props {

}

export default function BottomFooter(props: Props): ReactElement {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="text common-text-medium">{"© 2019 Bản quyền thuộc về Medlink"}</div>
          <div className="text common-text-medium d-none d-sm-block">
            {"Đã đăng ký với Bộ Công Thương"}
          </div>
        </div>
      </div>
    </div>
  )
}
