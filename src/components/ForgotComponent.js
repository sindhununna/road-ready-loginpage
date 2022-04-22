import React,{useState} from 'react'

function ForgotComponent({loginDetails,error}) {
    const [details, setDetails] = useState({ email: "", password: "" });
    const loginPageStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "32px auto 37px",
        maxWidth: "300px",
        background: "#fff",
        padding: "0px",
        borderRadius: "15px",
      };
      const imgStyle = {
        width: "200px",
        height: "100px",
        marginTop: "10px",
      };
      const buttonStyle = {
        width: "100px",
        padding: "3px",
        fontWeight: "bold",
        borderRadius: "15px",
        marginBottom: "10px",
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
      };
      return (
        <div className="App">
          <div className="login-wrapper" style={loginPageStyle}>
            {/* <h2>Login Page</h2> */}
            <img
              style={imgStyle}
              alt="road-ready logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABJlBMVEX///8AAAD09PSMjIylpaXMzMzV1dXd3d0LCws1NTX7+/sKldkMk9iurq5wcHAuc8YwcMVhYWE/Uba5ublKSkrs7OwlJSV+fn7Gxsbo6Oi/v781a8I+T7YUjNTb29sFmtwahdAkfMs8Zb9QUFA/Pz+YmJgnecpBYLwpObAaLa1YWFiSkpIrO7B1dXUdHR1WVlZ0esUsLCwWFhaDg4NHWbh9xevt9/w1SLTe7PdLjtJag8tGbME0X73V2O3i5PMwQrLH6Pet2/KTzO1ruuY4q+JVsuTf8vq52/GSxulMpt5ysuKax+lrrd/M4/SCt+KqzutHmdhnoNmRs9+/1O2sxeaiveNBfcprltOApdliiM2CltGjsNuMnNPGy+dicMGyud96hckAHarZeYqfAAAWcUlEQVR4nO1dC3vTxtKW5ItsFZk4snxREhNiO0ASJzhOk0BD8p2eHmgPTWmBQkvCpf//T3x70WVnb5JsmRPA7/OUgrQj7b6a3Z2dmV0bxpeGnf12hMPd/3Vlvjy0zASl/3Vlvjws6ZsLS/rmwpK+ubCkby4s6ZsLS/rmwpK+ubCkby4s6ZsLS/rmwpK+ubCkby58EfQ5Fc+V3/Arrlsul93AdjI/zaogEdfrWtlFyLvsgLyqYjEXbxZ9jQRNO7zWLw1x5cTCfrnJVN4clPoZ3lDpDBORphdR0W0yr5aIWS7zrnqpGl2/WfSxdNAqVgfhP/miwcAU0C5bwiNZOO4+L9LpkTsue02Qszu82NCjdxZKn3P8f/968eP3BD/+69nT1N7C02c1FG1yD0XyCKYaAuVCI3KLuVDjxKyxTGxIPu+i6Du+/PHfP9259d13dyJ8h/DTf75/9lQjxdFn15J/ssXsoamGp3i2daAQqPta+rqqF3WMBdH39Mef7jDEsUAc3vn+mUoNIX199p9MqZGGPISm9OlVlb6SV6np21WLDZ0F0Pf0559u3VKQFzJ4686/n6XS1/dBXZNCDTMFE198ckUrYXsq+qY6sbrBDsAF0Oc8+wVzlwpU6HtJL2brVoU9NC4Dpls5DgX++nqBdllBX0kv1yyUvuOf72zcyoqNjf9c6ujjZtYc7CE6uAnETxdJwNDnppdOMCd9xz9vbPAMEYC/gdu/nKrp4xCWSBn3IrTgc1vpEgkS+np5xOak78Utlp6Njc3NW7/89vzZ6enT4+Pj09PTyxc///fO5iYgcWPzV0CgpnK0gHIa1LZFM/xLkNCnm+BTXpkTl7c2NxJsbv7+27Njabnnv2ywJTc2f8tDX42/3PH6tl31BLvWtJOnSrpuY1S1K95IYnoz9Ildt11yu/2uW2oXTN9/NxNONu9+9/xUU/b42a+bbPFbyRCYRh+nRofMSpi3iZnuy5u99cQ09CUmcUSfw99oJp+kKhkOZqbvEqlbgt903IU1e/H73UTgbqyAEtoOO6MyBr5tcc0BE4TFGTTdmCLuiTAXxa6r6Ctz1ytAzuPFZqbveULF3c0X0j4r4vIPRur3UEio0i4wQXb11YVWRqx+3GzT5cX4uTyibwKu1nljqMcPJLPR5ySKhMjLIXjKEkgFuQq1uCqDm03xiVD/oq4G3QQCe8IMEdJXhVfFtbRdBH2nGxEJd7ef5/OgGZePtu/GsvgCrM8OVxysHGoy3wBQiLA5kAZZGy2oRyF9UJerErlgfvout++GuP1Hxm7L4nUkfXf7V4OnjycITK9S/yloUJteA323Lf3AcIoN6QM62ZHWHnb7Geh7tR3St72dp98mOP79dkw/R1+ZL8sO8ofyx4E2094LHC1ypzXs35Q+OO/K3WCw++an73Rlm+L2I5nqHV++fvnHI0LOo7cv/3x1Kvv2r2+Hz1h5aWir7GeoK1A1Yp84oGcq2gHEKH1gpJA5oDHA18pP38uQvrWX4r1XLx9tr6zcRsD0IqysrLx5+1qk+XI7JPANoE+YGsCKQzYWGZw+TPEVQLqKBrA6o/SBDi2ZbwiAbZOfvr9uE6y85q47r/5YodTxWFl78yfP4PEjWnQb0CekCoO6qpzKAllAixR9F44LlD4wc/QUYuBr5afv9Rpu9toTeNX5882alDuKtZW3nKvFeYufs/IXaLzwxdkG1VU1YrvTEF8AWqQMJrGTQE24onwbGCBnmDrebq2t3T4Hl45frq2t6LF29jfH+F9ba1t/O5JQEQN24pUYfRSs6bePLwCdlfhRKVivKKWPnXFaKjGgtbMYLq9ecn3xzxXI3loMcHXrLRQ7f/3KkEXaGLDMKOkDfQ7PVNnoE92lrDfhQNl8luQCvM3nb87WGGydna09fvz27du/H99Gf99i751dieLz0wfWddnpE2MdrE9ATR/bxeen74phaOts6/HVk+PIVnGs89fXawyFW2ePBd+Clr5MnVfQPjD25dC+bJ13p0D6rMdnWxHOtt69l1h551dMma2z99xtLX0sMwNVHViOawJ9qhkUPFucOobKJrMz1Zz0nf8QM3P2w0fl8vfJu7Ok3DW8p6WPtW3liy8D9jkyYQJrUWW/gYGB0sd+h32VmTTvzMvgydm9EGc/8FoFcf5uNSp79A7c0dIH9CiL3Ud6ODDNRqoqiXYfGDNthdicdh+D89WIvLOrVMfL+cOo9CrQPy19wHWi0CMQkCTrfOBiVfVCyaoDuEOF5XeIOVcdDK6PQj4epjubEa5WafmjI9aA0dIHll9yFwiceKlPHniTFXOHZM0LGFXNHXOueRk8PCJYl5gjUpxvrRKBVdbo1tIHKyt9qANcJ7TLAR+qoonArVAT66JYYqe7EjPjap2QoR/1WDgPicQ99pq+xsDfJ+1PoDOF/j7ozJPOvTCqEdIHnHly9YNJR3PR53w4WV0/Opffk4tcn6yvr4PVm56+VG8zDCWF8wSMdcssHi6WFNIHaZd9LS6QOd/M63y8vhKadP7x+tOHD2iYe/gOmdD83SfXV5BvPX2psQ4YPYwUDYYyxEY68lgHl2Igehu4YEjh6ZHn10frJ+urFOvrJ6sPZZY0ixT6YMxMmD1gX4rp5ZSEN14sPmQbRdq4CBzPH89ewfS9/3ARURcBkXmtTZ9NoY+L8zbAx+BzJmN5h4sowvBwRUhciOjjc9pg/xWTbYqk71wkj+DkRDc1p9AnZBmUYwJtPhGvqZRCChjbL1VJsmCcpMGnuLQSY9OTpL8USN+1nDyMiw/y+QUjjT4xjt4se5WuOxJbw1h4QrYFsp9Lrue5HWnGaUyfJKWyUfY8ryxPkiuMPgupXoITjHX2gtK6SaUvc4YVcMvnStNjMqwy5RLGKIy+o5itk4v7Rx/eXV9/unexl1C6p+KPrY3cUk1J94wwhlK5eEjos9ILMyiKvo97IU0XJ5/ex9bKk+ujvZDWk3sKSbY2iljajqr2LPj8BEuTF07A5rMw2aXC7MqDzVQrir7rC9JfL/auOUvv/b29EwqFAZOBPkO1v0DDXmqe6I4qs17MowIoF+kujfDxPmZo76Ekcv6RMvtBIZmFvvTMepk7gc/nAWgbysx6PksNYLyYfR2ol17clxso56t7FxcPnkjvZaRP3yRVMLcnzQglGFqafR0a/RsvaFuMc/3hk4oh4/rhJ6Xlko0+o6qmwmypHPKWNBPXpBaiZldRXzVu4jj+Td8SqEBZQWBd6Y5H8IQNgQjtAN/S7WmTb42pL3RP22zITJ/hyHZUNvQyhiMYgO0wzVm/o7InZEC3wxFi1lBRtzWIoQ5E5UUzwY4qvhDDchtJ7duDaZDlDZXOMFrk1obTmO7KuJNAJhc0Etumnsh1mAorE2gkACNqDrmCYfW6gesFVV+/kZeX8dyg2sshguH4Xdd1va6tDBbnQA76jj9eX2V3Qn8byEyf9emfB/fvP7j/8XPV7ItAVvqOV+9f7GE8uNaU+uaQlb579/dC/LPUvwQZ6fv4YC/Gg89XuxuPjPQlyofoW84fMbLR56BZI8Zy9EuQjb7zf1j6Pn2+6t10LOmbC0v65kLWsY/BP1mzh74BZJx5nzxMsJw5EtwQl0EqerZiK4xlVzHsHI4Dv48E+sr8aCWsPnkTG9+5YfQ5ZQaRS8QJGm1p7Xy3mbhb2003gw/FchuRs/WQOYCux7xWmvlruePI01UbjmInnIS+KtuEsvIjeewbi3D+kFqy1aGV9KegdknRsniMw47q3LAQFT48OgmPugOJCBI5PsA8CF8koQ8GA6eKmoCMCcEvPitE+pIUHlhQPLKE4FDj7LSlp+gQAS19tiy6QsMJss4LIoj7iroAt7gq5To3ePosJqOZLacJ0g1Vnn7VwUUHlp4+lVzDktMHU2oUQRvwJXM6fNXg6PPZoBBTSh9ilwYrHHVaQ83W0OeoAnukgtKpA0Sy5PumQLh6LC0yCyB9DojDxYX8tFQNSZUt4ZgX8CaQxZFDDhy6EMnAriFVLZDik+Ws1lnog0oWlbGFREgBQnaHM9GWP1QZIJZergY6trQR8mg/W0C5MW1O+rjpLiqSzp6of2lHr6kOSsh1ZFssBaY1GTsgPy/FWpiZPnntsrUIHgGgPTtSTUPWNDpeDibiSEw/VjEUZ4ksiD7xELp2a0dCKXtSlf7ETjUNqXltCjmYDiya4aCVRf4sXCp9fIZVI6Sp53J5vW3mqWImSLtZcsvTHVm2B0ODOG1kk4MTsmj6ZdvavQj6oPkxYDsGd5ZSYosKKR2darhutSoys0QpN+1nkkMzFbAN4JFtBvwsyg3hs0BKX32nMR7TM9S1u8/gzo5kqzCnfIBzoyJqUnRrMqOcwQ2avF0HelBKOk8+iPQddFntBpOxmMQCeluUK8OlofNH6AjbaeSrB4EES9gFwNyEC18uB5fldpKbIh14+vZhghHYtSaxCECto4MfoP0jSRzi+ZPKSdb+CjkCMMhA0wQsBvLkI6WDo2/CmeypW8PBvGxJHinLIuOPpZRVRbYVk//W7D0wEMMTPEBvKGy5K6sRbzKx31TMG+flA7G28o2sXOKuMZdciIlSuthDTwAgfbxJJCGHBzsg0X4KTGbF6hxaKPSadvTXyIUAyznWIwU8fanJj/kA6eM1u6+7ScH2Xjo4AhNDUV2oRvRaK4OcK5GTtYQ9PIsdgNTn8swG8FKhe7K1VSy02SL7ZMZjn9iWC3FfjV5TNT9NLgKYeRinCvtZdBncswDUR1jt5Ds1nCooeKJyqAEqSq6APqZyuUMVhbeA3ZPM96zRV6zVYnCNFb5N6kYaDj2uumozAQyQQjPVThFRLgE4YzQ2/dghtTAnfQRAn7DYybczkj4AKIHSxBf9fdnkdJn8wMqKJzr2YrFWi8HRJ3hhc3nfTKq+wP5QTnSisx7IKf3BuhgJ6P7R0pZ9rOoI0dkhCVQyyEtfxVg0fUonPwbwmoaa1szy1Jmhp08TtZEC9zlATA76wJWZtA/aWXScYxc46uPwZoaevkx7gBlgZwPQD2E0jSCGfIBcjjGThXAAKxgPC3TSR9DTpwiNK4E7DPAiKKc6MeSTbcaWhopiAHJJaya64vNDTx9b2YNqJRVEiH2i4sAxziQy5pJjwd7FNifbnYt00kfQ08eaCZnXO6xbU5UyYQDvML3EXlHat6Yox4I/zJI1E4t00kfQ08d2qMOsRlNT+0gK6Bml13ZmlFNVGA287MFwhTrpI+jpA3ezernBSk9hakF7nF4bzSgHcACewU5QyllsHujpAxqhHI84QA2RmiBc+E4mJ1W/vkwOAM7oDNsq58V8SKEv7bh7q+wmCKdZePSVdM+y9Jf44KEnUrmWTA6CfQirz8U66SOk0AesEMnoASybaLxPjVnwuQThZeigkDhrFHIAiuw26W/kzI8U+qCeCFYc7G+u9KroBhNamFFOcJ/JGqQ4eEbpAZsPafTJCQrBDWHxB+bitfC8O0f0gs0rByD3EuXPS8+ENPq44QZMH1w8N9EWIVvAjZl1PEm+lkquxspJOJG2SJpfs4DlLkEqfdxktx+n33f5z8wIiTkujXKlb1e9sTTZLZYTc1wabhY5AFmGYKbTLmZAKn3iurfdKI06oiuLreGsGVazygFI0rALd9JHSKfP0Zw8xABGFqU/6p6Bhnw+igxNolCeGT8v0unL9mO7vJmW6ydmc8hJ1soCxDlmMVaLkYm+LEmL/K9Kp/6stCpmkZIJvK8/tUhR3+Kd9HF12deofMPphxmKn1f4IU+AqtLp7sszIaMaSjPrefADc6E5aQCZ6NMdQoexI+scPQ0PXY3T3dfsTKhm2xLIGUDFnXUlIBt9+oivwqXsqMKctb4+ZqGaP9p2xh2V3Im/C3DSR8hKn1FRDepj9bgsPwER763Sh3wCtVy2DanwA+SgIy8y04dGQIk2HU71PtyR0IMb9CUpOyrLgu27QwewbPQBW38RTvoIVrseo52WveW7gMHDaZBqEThdVhMmo2jtWWXeK91oURlL5QJGThkJgE6JBS13Z4PdLe9OO6VRkH06s7ujUqdUDqo5za9exStPZ5CTpxsskRWghy/ESf9Vg53lFuOk/5oBTPLCc9K+eoD5bWHL3a8VwMWRNTy4RASQgFpwJv3XD2C1FLhx/BuBPEV3iYxgl3tLqyUvQPhvYU76rxYgT2tpteQEiNwvzkn/tQKE+BbnpP9Kkek3mZdQATj6FpOTViSsz+mLzLCCyBIGLhRWKYtPguY6BS7XAucwm2HqEAiXvbKCEcv1xNJT+X528ECWvc/yGz7DVqo/0dmtm5OOhTN4uP5gZQtjTWv77fZ+TWjPUNW/+rI8+HF6nhQI8H6WjhG+BX/sWD+c+A8CGuQ9tMLmWo5hWYaD/zN6ZHKzrPBPhxpajhUeCmHRh3RwbsUhVofoDv1/C5FPiiSi9Fl9mg0aF6YluhbzTEti0wFHX6qqFgBraLYbzqTbHhk9ZHCOHcMfunVz0Ou14h/PKplm1+/ioAGmr1o3TbSs9F2z7pk+XlX2W+QEySq5jk+GxOE17CgaR3a/4/SQFYG+joe+xA7Sq/I+SX5smbsDPMKju0hmaNNwaKtP6QvQm1roWnBoTqZoJCshO87pmGZt1yC1EIPzIBj9WZz0PqLGMve9nm+WLPtgiJoy7Fnjdr3qjKhiOhPisbUrFUSfhy0DvKr0SSQf04eutBCBPv70Q2yqIhLrmOyGuT+I1k0+cR0FpjmYmBOcBYCbj/vaBBFp+1R0H3+CNrrQsxF9FXQTKa2FOnKNnOO7i57dNPcP8DNrZmcg9GWQV/OZlruoWRb+UiXi20FkYmPTIb205oaVSn6s3HMxDyNK3zQwkGKWcTMG5m4fm6kjs43o3jW647GP/+2G859Pdii0UP/FfxuaU1zCGSCSrbZZtrAKIv32m+bAcOrmFNHntBBbPrpZMusW1itE35g8pox4RmOu1eVnrS7zq13jBaYWCPQhfgZETQZln5BFNjYPySWrFm/SR/ThHoQpQPThnENEX2jnN23MFPrDCvdyRAMRkaT0hdkr5Xb4xBb+SjvmyCIzBfpMQ6zoU3PcQ/TV8KzUMHd3cFp3l9IXLcks7JU6uAkB3Ii+JpkXJ65PHLQMfah9uJc063js80aYtS4d+wxCX8lsWn7g9auYqT6hLzCsIEBNrfrVgGoBpQ+x4/c8Dymci0uQqSOkr0foG2CqmpS+Ce73aHTs4N10ZUpfD/f0qhcYjh00b4Q7KqIvwAqA/hDpQzwcNmo4LQrRhxow3DVZ+tDtUYmmnBH60Oh+OKqjtg3NZnkSLtspfSNzH/++toOKj4bmIat9lD7U1zuoQAWPfYix6Q5NSWt2orGvbjbdttlAtfC8m3DoOqaP9teO2ThAetOj9OFxpR66y6gLLcCeSJdsrkAt9Mvk42O7jyyUdnHWCumxloPDrLUePTF2SKdHSh+NgXXDs4VtagghBfND+mya21MmSkznUZdO4K1w5o2eSd55E7x5HjKoqInfd9HfDYfkrQTYaq3Ea4JKUKH/Q620vaoRBE4vwAoa4IK+56E/cW+kfxhVj45tXS+yHpyApsPYXkDeRUuQ51UCm9718B+4b+PHdB1SGFfIQcXwt7FJXkj4TPTOmzD03Xx4Zt22GspzhZbQw6HzddHHJ30zcHaH7eZC1xD/D6PV4MtzQsMrAAAAAElFTkSuQmCC"
            />
            {error !== "" ? <div>{error}</div> : ""}
            <h3>Forgot Password</h3>
            <form onSubmit={handleSubmit} className="form-container">
               
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  name="email"
                  className={"form-control"}
                  placeholder="Email"
                  onChange={(e) => {
                    setDetails({ ...details, email: e.target.value });
                  }}
                  value={details.email}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={buttonStyle}>
               Submit
              </button>
            </form>
          </div>
        </div>
      );
    };

export default ForgotComponent