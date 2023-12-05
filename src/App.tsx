import React from "react";
import cl1ck from "./assets/cl1ck.svg";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 3px 0px #BDBDBD1A",
          width: "80%",
          borderRadius: 24,
          padding: 40,
          gap: 40,
          margin: "auto",
        }}
      >
        <img src={cl1ck} />
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <span style={{}}>Hi, Adam!</span>
          <div
            style={{
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <img src="" width="47.46" height="47.46" />
            <img src="" width="32" height="32" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 3px 0px #BDBDBD1A",
          width: "80%",
          borderRadius: 24,
          padding: 40,
          gap: 40,
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <img src="" width="32" height="32" />
            <span>Job One</span>
          </div>
          <button></button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 24,
            padding: 40,
            gap: 24,
            background: "#F3F6FF",
          }}
        >
          <span
            style={{
              fontWeight: 500,
              fontSize: 24,
              lineHeight: 1.21,
              color: "#313649",
              alignSelf: "self-start",
            }}
          >
            Client Info
          </span>
          <div
            style={{
              background: "#CED3E8",
              border: "1px solid #CED3E8",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Client Name:
              <span
                style={{
                  color: "#EE5555",
                }}
              >
                *
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Add client name here"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Website:
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                {" "}
                (optional)
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Example company.co.id"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Client info and highlights:
              <span
                style={{
                  color: "#EE5555",
                }}
              >
                *
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Add your company info and highlights here"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 24,
            padding: 40,
            gap: 24,
            background: "#F3F6FF",
          }}
        >
          <span
            style={{
              fontWeight: 500,
              fontSize: 24,
              lineHeight: 1.21,
              color: "#313649",
              alignSelf: "self-start",
            }}
          >
            Client Info
          </span>
          <div
            style={{
              background: "#CED3E8",
              border: "1px solid #CED3E8",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Client Name:
              <span
                style={{
                  color: "#EE5555",
                }}
              >
                *
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Add client name here"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Website:
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                {" "}
                (optional)
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Example company.co.id"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Client info and highlights:
              <span
                style={{
                  color: "#EE5555",
                }}
              >
                *
              </span>
            </span>
            <input
              style={{
                background: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 16,
                gap: 10,
                width: "68%",
                border: "none",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
              }}
              placeholder="Add your company info and highlights here"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 24,
            padding: 40,
            gap: 24,
            background: "#F3F6FF",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 1.21,
                color: "#313649",
              }}
            >
              Filtering Specifics
            </span>
            <button
              style={{
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.21,
                color: "#F3F6FF",
                background: "#5955EE",
                gap: 10,
                opacity: 0.5,
                borderRadius: 16,
                padding: "16px 32px",
                border: 0,
              }}
            >
              Apply
            </button>
          </div>

          <div
            style={{
              background: "#CED3E8",
              border: "1px solid #CED3E8",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Job title:
            </span>
            <div
              style={{
                display: "flex",
                width: "68%",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  padding: "16px 24px",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#313649",
                }}
              >
                <span>Full Stack</span>
              </div>

              <div
                style={{
                  borderRadius: 16,
                  padding: "12px 16px",
                  background: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#858CA7",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <span>OR</span>
                <img width={24} height={24} />
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  padding: "16px 24px",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#313649",
                }}
              >
                <span>Software Engineer</span>
              </div>

              <div
                style={{
                  borderRadius: 16,
                  padding: "12px 16px",
                  background: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#858CA7",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <span>OR</span>
                <img width={24} height={24} />
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  padding: "16px 24px",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#313649",
                }}
              >
                <span>Mobile Engineer</span>
              </div>

              <button>
                <img width={24} height={24} />
                <span>Add more</span>
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#949DBC",
              }}
            >
              Years of Experience Required:
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                {" "}
                (optional)
              </span>
            </span>
            <div
              style={{
                display: "flex",
                width: "68%",
                alignItems: "center",
                gap: 16,
              }}
            >
              <input
                style={{
                  background: "#FFFFFF",
                  padding: "16px 24px",
                  borderRadius: 16,
                  gap: 10,
                  border: "none",
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#858CA7",
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  lineHeight: 1.21,
                  color: "#949DBC",
                }}
              >
                Collective experience
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: 16,
                padding: "12px 16px",
                background: "#FFFFFF",
                fontSize: 16,
                lineHeight: 1.21,
                color: "#858CA7",
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <span>With</span>
              <img width={24} height={24} />
            </div>
          </div>

          <div
            style={{
              background: "#CED3E8",
              border: "1px solid #CED3E8",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <button
              style={{
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.21,
                color: "#F3F6FF",
                background: "#5955EE",
                gap: 10,
                opacity: 0.5,
                borderRadius: 16,
                padding: "16px 32px",
                border: 0,
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
