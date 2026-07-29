import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Registration / login assets ──────────────────────────────────────────────
import imgRectangle from "@/imports/회원가입/94e4a2fedbf363b021d26cae1904ddf02ea01500.png";
import imgLogo      from "@/imports/회원가입/2301006ea20de13c489c42651b3b60f68cc5d644.png";
import imgCharacter from "@/imports/회원가입/bc1360748006a9302efb741af52d877071e65e53.png";

// ── Loading screen leaf decorations ─────────────────────────────────────────
import imgLeafA from "@/imports/Loading/fda34ed29b3ac5cdd4b6375a53a7e7b55606ca8c.png";
import imgLeafB from "@/imports/Loading/83795503889567fd120b8de6de15d223ff4a1a82.png";
import imgLeafC from "@/imports/Loading/3c3b1eeeb1fa6d3ea8fb45c3e1e3e8e98b4943f1.png";
import imgLeafD from "@/imports/Loading/f6dd02823fd49ecff1217815f177361651219301.png";

// ── Main screen assets ────────────────────────────────────────────────────────
import imgMainMap   from "@/imports/Main피보호자/85118862811082a8e4ea81b4282eee710f491a7c.png";
import imgMainBadge from "@/imports/Main피보호자/56058306eaa8722ccf2fe8eb07ce3cd428589005.png";
import mainPaths    from "@/imports/Main피보호자/svg-jf129ggkg0";

// ── Menu assets ───────────────────────────────────────────────────────────────
import imgMenuLogo    from "@/imports/Menu/2301006ea20de13c489c42651b3b60f68cc5d644.png";
import imgMenuProfile from "@/imports/Menu/99eb3ae505a7bf4cc9b0770dd9cd52824b1a752f.png";
import menuPaths      from "@/imports/Menu/svg-bk9npgw5mw";

const jua: React.CSSProperties = { fontFamily: "'Jua', sans-serif" };

// ─────────────────────────────────────────────
// Shared components (registration/login flow)
// ─────────────────────────────────────────────

function Background() {
  return (
    <div className="absolute h-[968px] left-[-62px] top-[-43px] w-[495px] pointer-events-none">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgRectangle} />
    </div>
  );
}

function LogoLetters() {
  return (
    <>
      <div className="absolute h-[213px] left-[10px] top-[58px] w-[378.667px]">
        <img alt="ZIP_RO" className="absolute inset-0 max-w-none size-full object-cover pointer-events-none" src={imgLogo} />
      </div>
      <div className="absolute flex h-[71.818px] items-center justify-center left-[60.34px] top-[165.2px] w-[45.751px]">
        <div className="flex-none rotate-[11.37deg]"><p style={jua} className="h-[66.563px] leading-[normal] text-[55px] text-white tracking-[2.75px] w-[33.281px]">Z</p></div>
      </div>
      <div className="absolute flex h-[64.898px] items-center justify-center left-[101px] top-[115px] w-[49.817px]">
        <div className="flex-none rotate-[11.37deg]"><p style={jua} className="h-[58.338px] leading-[normal] text-[#f0f0f0] text-[33px] tracking-[1.65px] w-[39.082px]">S</p></div>
      </div>
      <div className="absolute flex h-[48.722px] items-center justify-center left-[152.78px] top-[112.63px] w-[39.938px]">
        <div className="flex-none rotate-[-16.13deg]"><p style={jua} className="h-[42.228px] leading-[normal] text-[#f0f0f0] text-[33px] tracking-[1.65px] w-[29.364px]">a</p></div>
      </div>
      <div className="absolute flex h-[41.139px] items-center justify-center left-[206.03px] top-[112.59px] w-[28.677px]">
        <div className="flex-none rotate-[-11.27deg]"><p style={jua} className="h-[37.615px] leading-[normal] text-[#f0f0f0] text-[33px] tracking-[1.65px] w-[21.745px]">f</p></div>
      </div>
      <div className="absolute flex h-[39.71px] items-center justify-center left-[252.29px] top-[114.59px] w-[25.613px]">
        <div className="flex-none rotate-[6.09deg]"><p style={jua} className="h-[37.615px] leading-[normal] text-[#f0f0f0] text-[33px] tracking-[1.65px] w-[21.745px]">e</p></div>
      </div>
      <div className="absolute flex h-[68.147px] items-center justify-center left-[142.5px] top-[165.37px] w-[26.21px]">
        <div className="flex-none rotate-[-9.91deg]"><p style={jua} className="h-[66.563px] leading-[normal] text-[55px] text-white tracking-[2.75px] w-[14.977px]">I</p></div>
      </div>
      <div className="absolute flex h-[70.706px] items-center justify-center left-[202.99px] top-[164.09px] w-[41.689px]">
        <div className="flex-none rotate-[-9.05deg]"><p style={jua} className="h-[66.563px] leading-[normal] text-[55px] text-white tracking-[2.75px] w-[31.617px]">P</p></div>
      </div>
      <div className="absolute flex h-[56.239px] items-center justify-center left-[277.91px] top-[162.84px] w-[37.264px]">
        <div className="flex-none rotate-[14.74deg]"><p style={jua} className="h-[51.586px] leading-[normal] text-[40px] text-white tracking-[2px] w-[24.961px]">R</p></div>
      </div>
      <p style={jua} className="absolute h-[51.586px] leading-[normal] left-[309.53px] text-[40px] text-white top-[186.13px] tracking-[2px] w-[26.625px]">O</p>
    </>
  );
}

// ─────────────────────────────────────────────
// Field + helpers (registration/login)
// ─────────────────────────────────────────────

interface FieldProps {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; bgColor: string; labelTop: number; inputTop: number; leftOffset?: number;
}
function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
function Field({ label, value, onChange, type = "text", bgColor, labelTop, inputTop, leftOffset = 60 }: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPw, setShowPw] = useState(false);
  const isPassword = type === "password";
  return (
    <>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start w-[272px]" style={{ left: leftOffset, top: labelTop }}>
        <p className="font-normal leading-[1.4] not-italic text-[#1e1e1e] text-[16px]">{label}</p>
      </div>
      <div className="absolute min-w-[120px] rounded-[8px] cursor-text" style={{ background: bgColor, left: leftOffset, top: inputTop, width: 272, border: "1px solid #d9d9d9" }} onClick={() => inputRef.current?.focus()}>
        <div className="content-stretch flex items-center overflow-clip px-[16px] py-[12px] rounded-[inherit] size-full gap-2">
          <input ref={inputRef} type={isPassword ? (showPw ? "text" : "password") : type} value={value} onChange={(e) => onChange(e.target.value)} placeholder="입력"
            className="flex-[1_0_0] min-w-px bg-transparent leading-none outline-none text-[16px] placeholder:text-[#b3b3b3]"
            style={{ color: "white", caretColor: "white", fontFamily: "Inter, sans-serif" }} />
          {isPassword && (
            <button type="button" onMouseDown={(e) => { e.preventDefault(); setShowPw(p => !p); }} className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100">
              <EyeIcon open={showPw} />
            </button>
          )}
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
    </>
  );
}
function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <button onClick={onPress} className="absolute flex items-center justify-center w-6 h-6 rounded-full transition-opacity active:opacity-60"
      style={{ left: 313, top: 320, background: "rgba(200,170,120,0.4)", border: "1px solid rgba(110,60,9,0.25)" }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1L1 9" stroke="#6e3c09" strokeWidth="1.8" strokeLinecap="round" /></svg>
    </button>
  );
}
function SubmitButton({ onPress, enabled, top = 674, label = "제출" }: { onPress: () => void; enabled: boolean; top?: number; label?: string }) {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[86px] w-[225px]" style={{ top }}>
      <button onClick={() => enabled && onPress()} disabled={!enabled} className="flex-[1_0_0] min-w-px relative rounded-[8px] transition-opacity duration-150"
        style={{ background: enabled ? "#413c3c" : "#7a7676", cursor: enabled ? "pointer" : "not-allowed" }}>
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
            <p className="font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">{label}</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#484141] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Registration / login screens
// ─────────────────────────────────────────────

type Role   = "피보호자" | "보호자";
type Screen = "role-select" | "pibohoja" | "bohoja" | "id-setup" | "login" | "loading" | "main" | "general-login";

function RoleSelectScreen({ onNext }: { onNext: (role: Role) => void }) {
  const [selected, setSelected] = useState<Role | null>(null);
  const glow = (role: Role) => ({
    background: "rgba(255,116,160,0.7)",
    boxShadow: selected === role ? "0 0 14px 6px rgba(255,116,160,0.85),0 0 30px 10px rgba(255,80,130,0.4)" : "none",
    filter: selected === role ? "brightness(1.18)" : "brightness(1)",
    transform: selected === role ? "scale(1.04)" : "scale(1)",
  });
  return (
    <>
      <div className="absolute h-[115px] left-[17px] top-[326px] w-[365px]"><img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgCharacter} /></div>
      <div style={jua} className="-translate-x-1/2 absolute leading-[0] left-[196px] not-italic text-[#6e3c09] text-[20px] text-center top-[364px] tracking-[1px] w-[290px]">
        <p className="leading-[normal] mb-0">ZIP_RO 에 오신 것을 환영합니다!</p>
        <p className="leading-[normal]">아래 보기 중 선택해주세요</p>
      </div>
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[275px] left-[46px] rounded-[30px] top-[466px] w-[301px]" />
      <p style={jua} className="absolute leading-[normal] left-[121px] not-italic text-[#f37272] text-[20px] top-[496px] tracking-[1px]">당신은 누구인가요?</p>
      <button onClick={() => setSelected("피보호자")} className="absolute h-[34px] left-[99px] overflow-clip rounded-[8px] top-[545px] w-[195px] flex items-center justify-center p-[12px] transition-all duration-200" style={glow("피보호자")}>
        <span style={jua} className="leading-[normal] shrink-0 text-[#f3f3f3] text-[16px] tracking-[0.8px] whitespace-nowrap">피보호자</span>
      </button>
      <button onClick={() => setSelected("보호자")} className="absolute h-[34px] left-[99px] overflow-clip rounded-[8px] top-[605px] w-[195px] flex items-center justify-center p-[12px] transition-all duration-200" style={glow("보호자")}>
        <span style={jua} className="leading-[normal] shrink-0 text-[#f3f3f3] text-[16px] tracking-[0.8px] whitespace-nowrap">보호자</span>
      </button>
      <div className="absolute left-[84px] top-[665px] w-[225px]">
        <button onClick={() => selected && onNext(selected)} disabled={!selected} className="w-full relative rounded-[8px] transition-all duration-150"
          style={{ background: selected ? "#413c3c" : "#7a7676", cursor: selected ? "pointer" : "not-allowed" }}>
          <div className="flex items-center justify-center p-[12px]">
            <p className="font-normal leading-none shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">제출</p>
          </div>
          <div aria-hidden className="absolute border border-[#484141] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
    </>
  );
}

function PibohojaScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [phone, setPhone] = useState("");
  const ok = name.trim() && email.trim() && phone.trim();
  return (
    <>
      <BackButton onPress={onBack} />
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[425px] left-[46px] rounded-[30px] top-[310px] w-[301px]" />
      <Field label="이름" value={name} onChange={setName} bgColor="#b25e09" labelTop={345} inputTop={374} leftOffset={62} />
      <Field label="메일" value={email} onChange={setEmail} type="email" bgColor="#b97837" labelTop={441} inputTop={470} leftOffset={60} />
      <Field label="휴대폰" value={phone} onChange={setPhone} type="tel" bgColor="#ac835b" labelTop={542} inputTop={571} leftOffset={60} />
      <SubmitButton onPress={onNext} enabled={!!ok} top={674} />
    </>
  );
}

function BohojaScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); const [code, setCode] = useState("");
  const ok = name.trim() && email.trim() && phone.trim() && code.trim();
  return (
    <>
      <BackButton onPress={onBack} />
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[515px] left-[46px] rounded-[30px] top-[310px] w-[301px]" />
      <Field label="이름" value={name} onChange={setName} bgColor="#b25e09" labelTop={345} inputTop={374} leftOffset={62} />
      <Field label="메일" value={email} onChange={setEmail} type="email" bgColor="#b97837" labelTop={441} inputTop={470} leftOffset={60} />
      <Field label="휴대폰" value={phone} onChange={setPhone} type="tel" bgColor="#ac835b" labelTop={542} inputTop={571} leftOffset={60} />
      <Field label="코드 입력" value={code} onChange={setCode} bgColor="#a75635" labelTop={639} inputTop={668} leftOffset={60} />
      <SubmitButton onPress={onNext} enabled={!!ok} top={752} />
    </>
  );
}

function IdSetupScreen({ onNext }: { onNext: () => void }) {
  const [id, setId] = useState(""); const [pw, setPw] = useState("");
  const ok = id.trim() && pw.trim();
  return (
    <>
      <div className="absolute h-[115px] left-[17px] top-[307px] w-[365px]"><img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgCharacter} /></div>
      <div style={jua} className="-translate-x-1/2 absolute leading-[0] left-[196px] not-italic text-[#6e3c09] text-[20px] text-center top-[345px] tracking-[1px] w-[290px]">
        <p className="leading-[normal] mb-0">사용할 아이디와 비밀번호를</p>
        <p className="leading-[normal]">설정해주세요.</p>
      </div>
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[322px] left-[46px] rounded-[30px] top-[466px] w-[301px]" />
      <Field label="아이디" value={id} onChange={setId} bgColor="#37acb9" labelTop={491} inputTop={517} leftOffset={60} />
      <Field label="비밀번호" value={pw} onChange={setPw} type="password" bgColor="#58a2aa" labelTop={584} inputTop={611} leftOffset={60} />
      <SubmitButton onPress={onNext} enabled={!!ok} top={721} />
    </>
  );
}

function LoginScreen({ onNext }: { onNext: () => void }) {
  const [id, setId] = useState(""); const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false); const [autoLogin, setAutoLogin] = useState(false);
  const ok = id.trim() && pw.trim();
  const idRef = useRef<HTMLInputElement>(null); const pwRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="absolute h-[115px] left-[17px] top-[307px] w-[365px]"><img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgCharacter} /></div>
      <div style={jua} className="-translate-x-1/2 absolute leading-[0] left-[196px] not-italic text-[#6e3c09] text-[20px] text-center top-[345px] tracking-[1px] w-[290px]">
        <p className="leading-[normal] mb-0">회원가입이 완료되었습니다. </p>
        <p className="leading-[normal]">로그인을 진행해주십시오.</p>
      </div>
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[322px] left-[46px] rounded-[30px] top-[466px] w-[301px]" />
      <p className="absolute font-normal leading-[1.4] left-[60px] text-[#1e1e1e] text-[16px] top-[491px] w-[272px]">아이디</p>
      <div className="absolute left-[60px] top-[517px] w-[272px] rounded-[8px] cursor-text" style={{ background: "#90de9e", border: "1px solid #d9d9d9" }} onClick={() => idRef.current?.focus()}>
        <div className="flex items-center overflow-clip px-[16px] py-[12px] rounded-[inherit] size-full">
          <input ref={idRef} type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="입력" className="flex-[1_0_0] min-w-px bg-transparent leading-none outline-none text-[16px] placeholder:text-[#b3b3b3]" style={{ color: "white", caretColor: "white", fontFamily: "Inter, sans-serif" }} />
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
      <p className="absolute font-normal leading-[1.4] left-[60px] text-[#1e1e1e] text-[16px] top-[584px] w-[272px]">비밀번호</p>
      <div className="absolute left-[60px] top-[611px] w-[272px] rounded-[8px] cursor-text" style={{ background: "#459e56", border: "1px solid #d9d9d9" }} onClick={() => pwRef.current?.focus()}>
        <div className="flex items-center overflow-clip px-[16px] py-[12px] rounded-[inherit] size-full gap-2">
          <input ref={pwRef} type={showPw ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="입력" className="flex-[1_0_0] min-w-px bg-transparent leading-none outline-none text-[16px] placeholder:text-[#b3b3b3]" style={{ color: "white", caretColor: "white", fontFamily: "Inter, sans-serif" }} />
          <button type="button" onMouseDown={(e) => { e.preventDefault(); setShowPw(p => !p); }} className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100"><EyeIcon open={showPw} /></button>
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
      <div className="absolute left-[60px] top-[674px] flex items-center gap-2">
        <button onClick={() => setAutoLogin(!autoLogin)} className="w-5 h-5 rounded-[4px] border border-[#707071] flex items-center justify-center transition-colors shrink-0" style={{ background: autoLogin ? "#707071" : "transparent" }}>
          {autoLogin && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#2F2F32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        </button>
        <span style={jua} className="text-[#989791] text-[15px] leading-[1.4]">자동 로그인</span>
      </div>
      <div className="absolute left-[84px] top-[721px] w-[225px]">
        <button onClick={() => ok && onNext()} disabled={!ok} className="w-full relative rounded-[8px] transition-all duration-150" style={{ background: ok ? "#413c3c" : "#7a7676", cursor: ok ? "pointer" : "not-allowed" }}>
          <div className="flex items-center justify-center p-[12px]">
            <p className="font-normal leading-none shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">로그인</p>
          </div>
          <div aria-hidden className="absolute border border-[#484141] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// General login screen (일반로그인화면 — for returning users / after logout)
// ─────────────────────────────────────────────

function GeneralLoginScreen({ onLogin }: { onLogin: () => void }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const ok = id.trim() && pw.trim();
  const idRef  = useRef<HTMLInputElement>(null);
  const pwRef  = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* Character */}
      <div className="absolute h-[115px] left-[17px] top-[307px] w-[365px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCharacter} />
      </div>

      {/* Speech bubble */}
      <div style={jua} className="-translate-x-1/2 absolute leading-[0] left-[196px] not-italic text-[#6e3c09] text-[20px] text-center top-[345px] tracking-[1px] w-[290px]">
        <p className="leading-[normal] mb-0">안녕하세요.</p>
        <p className="leading-[normal]">로그인을 진행해주세요.</p>
      </div>

      {/* Card */}
      <div className="absolute bg-[#fff3c5] border border-[#b3b3b3] border-solid h-[322px] left-[49px] rounded-[30px] top-[466px] w-[301px]" />

      {/* 아이디 label */}
      <p className="absolute font-normal leading-[1.4] left-[73px] text-[#1e1e1e] text-[16px] top-[491px]">아이디</p>

      {/* 아이디 input */}
      <div className="absolute left-[66px] top-[517px] w-[272px] rounded-[8px] cursor-text"
        style={{ background: "#90de9e", border: "1px solid #d9d9d9" }}
        onClick={() => idRef.current?.focus()}>
        <div className="flex items-center overflow-clip px-[16px] py-[12px] rounded-[inherit] size-full">
          <input ref={idRef} type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="입력"
            className="flex-[1_0_0] min-w-px bg-transparent leading-none outline-none text-[16px] placeholder:text-[#b3b3b3] w-full"
            style={{ color: "white", caretColor: "white", fontFamily: "Inter, sans-serif" }} />
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>

      {/* 비밀번호 label */}
      <div className="absolute flex flex-col gap-[8px] items-start left-[73px] top-[584px] w-[272px]">
        <p className="font-normal leading-[1.4] text-[#1e1e1e] text-[16px]">비밀번호</p>
      </div>

      {/* 비밀번호 input with eye toggle */}
      <div className="absolute left-[66px] top-[613px] w-[272px] rounded-[8px] cursor-text"
        style={{ background: "#459e56", border: "1px solid #d9d9d9" }}
        onClick={() => pwRef.current?.focus()}>
        <div className="flex items-center overflow-clip px-[16px] py-[12px] rounded-[inherit] size-full gap-2">
          <input ref={pwRef} type={showPw ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="입력"
            className="flex-[1_0_0] min-w-px bg-transparent leading-none outline-none text-[16px] placeholder:text-[#b3b3b3]"
            style={{ color: "white", caretColor: "white", fontFamily: "Inter, sans-serif" }} />
          <button type="button" onMouseDown={(e) => { e.preventDefault(); setShowPw(p => !p); }}
            className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100">
            <EyeIcon open={showPw} />
          </button>
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>

      {/* 자동 로그인 */}
      <div className="absolute left-[73px] top-[677px] flex items-center gap-2">
        <button onClick={() => setAutoLogin(!autoLogin)}
          className="w-5 h-5 rounded-[4px] border border-[#707071] flex items-center justify-center transition-colors shrink-0"
          style={{ background: autoLogin ? "#707071" : "transparent" }}>
          {autoLogin && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#2F2F32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <span style={jua} className="text-[#989791] text-[15px] leading-[1.4]">자동 로그인</span>
      </div>

      {/* 로그인 button */}
      <div className="absolute left-[87px] top-[724px] w-[225px]">
        <button onClick={() => ok && onLogin()} disabled={!ok}
          className="w-full relative rounded-[8px] transition-all duration-150"
          style={{ background: ok ? "#413c3c" : "#7a7676", cursor: ok ? "pointer" : "not-allowed" }}>
          <div className="flex items-center justify-center p-[12px]">
            <p className="font-normal leading-none shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">로그인</p>
          </div>
          <div aria-hidden className="absolute border border-[#484141] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// Loading screen (with auto-transition)
// ─────────────────────────────────────────────

const LEAF_ANIM = [
  { opacity: [0,0,1,1] as number[], times: [0,0.1429,0.2143,1], ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.5,0.5714,1],    ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.2857,0.3571,1], ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.5714,0.6429,1], ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.6429,0.7143,1], ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.0714,0.1429,1], ease: ["linear","easeIn","linear"]  as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.4286,0.5,1],    ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,1,1]   as number[], times: [0,0.0714,1],         ease: ["easeIn","linear"]           as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.3571,0.4286,1], ease: ["linear","easeOut","linear"] as string[] },
  { opacity: [0,0,1,1] as number[], times: [0,0.2143,0.2857,1], ease: ["linear","easeOut","linear"] as string[] },
] as const;

const TEXT_OPACITY = [0,0.16667,0.33333,0.5,0.66667,0.83333,1,0.73966,0.51165,0.31536,0.15616,0.0445,0.01,0.17667,0.34333,0.51,0.67667,0.84333,0.98309,0.72512,0.49895,0.30468,0.14799,0.03967,0.01167,0.17833,0.345,0.51167,0.67833,0.845,0.9803,0.72271,0.49684,0.30292,0.14664,0.03888,0.01667,0.18333,0.35,0.51667,0.68333,0.85,0.97199,0.71549,0.49054,0.29764,0.14263,0.03658,0.01833,0.185,0.35167,0.51833,0.685,0.85167,0.96923,0.7131,0.48844,0.29589,0.1413,0.03582,0.02,0.18667,0.35333,0.52,0.68667,0.85333,0.96648,0.7107,0.48635,0.29414,0.13998,0.03507,0];
const TEXT_TIMES  = [0,0.0143,0.0286,0.0429,0.0571,0.0714,0.0857,0.1,0.1143,0.1286,0.1429,0.1571,0.1714,0.1857,0.2,0.2143,0.2286,0.2429,0.2571,0.2714,0.2857,0.3,0.3143,0.3286,0.3429,0.3571,0.3714,0.3857,0.4,0.4143,0.4286,0.4429,0.4571,0.4714,0.4857,0.5,0.5143,0.5286,0.5429,0.5571,0.5714,0.5857,0.6,0.6143,0.6286,0.6429,0.6571,0.6714,0.6857,0.7,0.7143,0.7286,0.7429,0.7571,0.7714,0.7857,0.8,0.8143,0.8286,0.8429,0.8571,0.8714,0.8857,0.9,0.9143,0.9286,0.9429,0.9571,0.9714,0.9857,0.9998,0.9999,1];

function Leaf({ anim, children }: { anim: typeof LEAF_ANIM[number]; children: React.ReactNode }) {
  return (
    <motion.div className="relative size-full" initial={{ opacity: 0 }} animate={{ opacity: anim.opacity }}
      transition={{ opacity: { duration: 7, times: anim.times, ease: anim.ease, repeat: Infinity } }}>
      {children}
    </motion.div>
  );
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);

  const leafImg = [imgLeafA, imgLeafA, imgLeafB, imgLeafB, imgLeafB, imgLeafC, imgLeafC, imgLeafD, imgLeafD, imgLeafA];

  const leafWrappers = [
    "aspect-[50.847/50.897] left-[37.15%] right-[49.91%] top-[calc(50%+267.45px)]",
    "aspect-[20.793/21.337] left-[40.71%] right-[54%]     top-[calc(50%+78.67px)]",
    "aspect-[35.624/34.169] left-[33.84%] right-[57.09%]  top-[calc(50%+196.08px)]",
    "aspect-[24.52/25.809]  left-[28.24%] right-[65.52%]  top-[calc(50%+54.9px)]",
    "aspect-[28.822/28.42]  left-[16.03%] right-[76.64%]  top-[calc(50%+54.21px)]",
    "aspect-[53.164/52.266] left-[33.84%] right-[52.63%]  top-[calc(50%+344.13px)]",
    "aspect-[27.397/27.368] left-[53.94%] right-[39.08%]  top-[calc(50%+85.68px)]",
    "aspect-[69.522/66.86]  left-[48.6%]  right-[33.71%]  top-[calc(50%+387.43px)]",
    "aspect-[36.706/36.954] left-[40.46%] right-[50.2%]   top-[calc(50%+154.48px)]",
    "aspect-[43.949/43.506] left-[19.08%] right-[69.73%]  top-[calc(50%+235.07px)]",
  ];

  const leafInner = [
    "h-[hypot(51.1762cqw,47.4967cqh)] rotate-[-47.11deg]  w-[hypot(48.8238cqw,-52.5033cqh)]",
    "h-[hypot(98.6058cqw,-1.32297cqh)] rotate-[-90.79deg] w-[hypot(-1.39419cqw,-98.677cqh)]",
    "h-[hypot(-31.0452cqw,63.1549cqh)] rotate-[27.14deg]  w-[hypot(68.9548cqw,36.8451cqh)]",
    "h-[hypot(66.9979cqw,27.5432cqh)]  rotate-[-66.6deg]  w-[hypot(33.0021cqw,-72.4568cqh)]",
    "h-[hypot(41.392cqw,52.2146cqh)]   rotate-[-38.8deg]  w-[hypot(58.608cqw,-47.7854cqh)]",
    "h-[hypot(-24.3887cqw,74.3314cqh)] rotate-[18.46deg]  w-[hypot(75.6113cqw,25.6686cqh)]",
    "h-[hypot(47.6293cqw,50.6668cqh)]  rotate-[-43.26deg] w-[hypot(52.3707cqw,-49.3332cqh)]",
    "h-[hypot(31.4353cqw,63.0248cqh)]  rotate-[-27.41deg] w-[hypot(68.5647cqw,-36.9752cqh)]",
    "h-[hypot(-49.6499cqw,44.212cqh)]  rotate-[48.12deg]  w-[hypot(50.3501cqw,55.788cqh)]",
    "h-[hypot(30.3608cqw,68.5037cqh)]  rotate-[-24.12deg] w-[hypot(69.6392cqw,-31.4963cqh)]",
  ];

  return (
    <>
      {leafWrappers.map((wCls, i) => (
        <div key={i} className={`-translate-y-1/2 absolute flex items-center justify-center ${wCls}`} style={{ containerType: "size" }}>
          <div className={`flex-none ${leafInner[i]}`}>
            <Leaf anim={LEAF_ANIM[i]}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={leafImg[i]} />
              </div>
            </Leaf>
          </div>
        </div>
      ))}
      <div className="absolute h-[115px] left-[8px] top-[177px] w-[365px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCharacter} />
      </div>
      <motion.div style={{ ...jua, left: "calc(50% - 6px)", transform: "translateX(-50%)" }} className="[word-break:break-word] absolute leading-[0] not-italic text-[#7e4c34] text-[29px] text-center top-[207px] tracking-[1.45px] w-[281px]"
        initial={{ opacity: 0 }} animate={{ opacity: TEXT_OPACITY }}
        transition={{ opacity: { duration: 7, times: TEXT_TIMES, ease: "linear", repeat: Infinity } }}>
        <p className="leading-[normal] mb-0">안전한 집을 향해 ...</p>
        <p className="leading-[normal]">조금만 기다려주세요</p>
      </motion.div>
    </>
  );
}

// ─────────────────────────────────────────────
// Menu overlay (slide-in from right)
// ─────────────────────────────────────────────

function MenuOverlay({ onClose, onLogout }: { onClose: () => void; onLogout: () => void }) {
  // All x-coords are relative to the panel origin at x=168
  const menuButtons = [
    { label: "커뮤니티", top: 226, bg: "#96530f", left: 26 },
    { label: "보안화면", top: 320, bg: "#80460d", left: 28 },
    { label: "모니터링", top: 414, bg: "#b25e09", left: 27 },
    { label: "개인정보", top: 508, bg: "#96530f", left: 26 },
    { label: "설정",     top: 602, bg: "#80460d", left: 28 },
  ];

  return (
    <div className="absolute inset-0">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Sliding panel */}
      <motion.div
        className="absolute top-0 h-full"
        style={{ left: 168, width: 225 }}
        initial={{ x: 225 }}
        animate={{ x: 0 }}
        exit={{ x: 225 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
      >
        {/* Panel background */}
        <div className="absolute inset-0 bg-[#ffeba2] border-l border-[#f5e092]" />

        {/* Close button */}
        <button onClick={onClose} className="absolute top-[14px] left-[10px] w-8 h-8 flex items-center justify-center rounded-full transition-opacity active:opacity-60" style={{ background: "rgba(0,0,0,0.12)" }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1l11 11M12 1L1 12" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo background + letters (same layout as login LogoLetters, scaled ×0.6) */}
        <div className="absolute top-[61px] w-[227px] h-[128px]" style={{ left: -2, position: "relative" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMenuLogo} />
          {/* Z */}
          <div className="absolute flex items-center justify-center" style={{ left: 30, top: 64, width: 27.5, height: 43.1 }}>
            <div className="flex-none rotate-[11.37deg]"><p style={jua} className="text-[33px] text-white tracking-[1.65px] leading-[normal]">Z</p></div>
          </div>
          {/* S */}
          <div className="absolute flex items-center justify-center" style={{ left: 55, top: 28, width: 29.9, height: 38.9 }}>
            <div className="flex-none rotate-[11.37deg]"><p style={jua} className="text-[20px] text-[#f0f0f0] tracking-[1px] leading-none">S</p></div>
          </div>
          {/* a */}
          <div className="absolute flex items-center justify-center" style={{ left: 86, top: 33, width: 24, height: 29.2 }}>
            <div className="flex-none rotate-[-16.13deg]"><p style={jua} className="text-[20px] text-[#f0f0f0] tracking-[1px] leading-[normal]">a</p></div>
          </div>
          {/* f */}
          <div className="absolute flex items-center justify-center" style={{ left: 118, top: 39, width: 17.2, height: 24.7 }}>
            <div className="flex-none rotate-[-11.27deg]"><p style={jua} className="text-[20px] text-[#f0f0f0] tracking-[1px] leading-none">f</p></div>
          </div>
          {/* e */}
          <div className="absolute flex items-center justify-center" style={{ left: 145, top: 34, width: 15.4, height: 23.8 }}>
            <div className="flex-none rotate-[6.09deg]"><p style={jua} className="text-[20px] text-[#f0f0f0] tracking-[1px] leading-[normal]">e</p></div>
          </div>
          {/* I */}
          <div className="absolute flex items-center justify-center" style={{ left: 80, top: 64, width: 15.7, height: 40.9 }}>
            <div className="flex-none rotate-[-9.91deg]"><p style={jua} className="text-[33px] text-white tracking-[1.65px] leading-[normal]">I</p></div>
          </div>
          {/* P */}
          <div className="absolute flex items-center justify-center" style={{ left: 116, top: 64, width: 25, height: 42.4 }}>
            <div className="flex-none rotate-[-9.05deg]"><p style={jua} className="text-[33px] text-white tracking-[1.65px] leading-[normal]">P</p></div>
          </div>
          {/* R */}
          <div className="absolute flex items-center justify-center" style={{ left: 161, top: 63, width: 22.4, height: 33.7 }}>
            <div className="flex-none rotate-[14.74deg]"><p style={jua} className="text-[24px] text-white tracking-[1.2px] leading-[normal]">R</p></div>
          </div>
          {/* O */}
          <p style={{ ...jua, left: 180, top: 77 }} className="absolute text-[24px] text-white tracking-[1.2px] leading-[normal] not-italic">O</p>
        </div>

        {/* Menu buttons */}
        {menuButtons.map(({ label, top, bg, left }) => (
          <button key={label} className="absolute h-[65px] rounded-[8px] w-[158px] flex items-center justify-center border border-[#684537]"
            style={{ top, left, background: bg }}>
            <p style={jua} className="text-[15px] text-white tracking-[0.75px] leading-[normal]">{label}</p>
          </button>
        ))}

        {/* 도움말 / 로그아웃 */}
        <p style={{ ...jua, left: 107.5, transform: "translateX(-50%)" }} className="absolute text-[15px] text-black text-center tracking-[0.75px] leading-[normal] top-[705px]">도움말</p>
        <button onClick={() => { onClose(); onLogout(); }} style={{ ...jua, left: 107.5, transform: "translateX(-50%)" }} className="absolute text-[15px] text-black text-center tracking-[0.75px] leading-[normal] top-[741px] cursor-pointer hover:opacity-70 transition-opacity">로그아웃</button>

        {/* Profile image */}
        <div className="absolute top-[740px] w-[51px] h-[87px]" style={{ left: 14 }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMenuProfile} />
        </div>

      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main screen (피보호자)
// ─────────────────────────────────────────────

function MainScreen({ onLogout }: { onLogout: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fff3c5] relative size-full">
      {/* Map */}
      <div className="absolute h-[764px] left-0 top-[39px] w-[393px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full max-w-none" style={{ left: "-27.16%", top: "-3.79%", width: "242.71%" }} src={imgMainMap} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bg-[#fff3c5] h-[91px] left-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.5)] top-[761px] w-[393px]" />

      {/* SOS button — red outer circle with drop shadow */}
      <div className="-translate-x-1/2 absolute left-1/2 size-[121px] top-[701px]">
        <div className="absolute inset-[-4.96%]">
          <svg className="block size-full" fill="none" height="133" viewBox="0 0 133 133" width="133">
            <g filter="url(#filter0_d_main)">
              <circle cx="66.5" cy="66.5" fill="#EA1E2F" r="60.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="133" id="filter0_d_main" width="133" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_main" />
                <feOffset /><feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_main" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_main" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* SOS inner white circle */}
      <div className="-translate-x-1/2 absolute left-1/2 size-[101px] top-[711px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="101" viewBox="0 0 101 101" width="101">
          <circle cx="50.5" cy="50.5" fill="white" r="50.5" />
        </svg>
      </div>

      {/* SOS compass icon */}
      <div className="absolute inset-[84.98%_42.24%_9%_41.98%]">
        <div className="absolute inset-[-4.87%_-4.03%]">
          <svg className="block size-full" fill="none" height="56.3321" viewBox="0 0 67 56.3321" width="67">
            <path d={mainPaths.p3b87de80} stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d={mainPaths.p3bc54280} stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d="M61.4 28.1677H64.5" stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d={mainPaths.p4f40c8} stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d="M2.5 28.1677H5.60001" stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d="M33.502 2.5V5.06662" stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d={mainPaths.pb33540} stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d="M33.502 28.1677V43.5674" stroke="#EA1E2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          </svg>
        </div>
      </div>

      {/* 긴급신고 text */}
      <p style={jua} className="-translate-x-1/2 absolute leading-[normal] left-1/2 text-[15px] text-black text-center top-[784px] tracking-[0.75px] whitespace-nowrap">긴급신고</p>

      {/* Search box (출발지 / 도착지) */}
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] top-[65px] w-[276px]">
        <div className="bg-white h-[29px] w-full rounded-tl-[10px] rounded-tr-[10px]" />
        <div className="bg-[#fffefe] h-[29px] w-full rounded-bl-[10px] rounded-br-[10px]" />
        <div className="absolute h-0 left-[21px] top-[29px] w-[261px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" height="0.5" viewBox="0 0 261.081 0.5" width="261.081">
              <line stroke="#1D2433" strokeDasharray="1 1" strokeLinecap="round" strokeWidth="0.5" x1="0.25" x2="260.831" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
        <p style={jua} className="absolute leading-[normal] text-[15px] text-black left-[16px] top-[7px] tracking-[0.75px]">출발지:</p>
        <p style={jua} className="absolute leading-[normal] text-[15px] text-black left-[16px] top-[34px] tracking-[0.75px]">도착지:</p>
        {/* Search icons */}
        {[7, 34].map((topOff) => (
          <div key={topOff} className="-translate-y-1/2 absolute aspect-square right-[11px]" style={{ top: topOff + 8, width: 12 }}>
            <div className="absolute inset-[-7.24%]">
              <svg className="block size-full" fill="none" height="12.651" viewBox="0 0 12.651 12.651" width="12.651">
                <path d={mainPaths.p1deaac00} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Hamburger menu button (top-left) */}
      <button onClick={() => setMenuOpen(true)} className="absolute flex items-center justify-center h-[51px] left-[7px] top-[70px] w-[45px]">
        <svg width="30" height="21" viewBox="0 0 30 21" fill="none">
          <path d={mainPaths.p200c3d80} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
      </button>

      {/* Shield icon (bottom-left nav) */}
      <div className="-translate-y-1/2 absolute aspect-[41/51] left-[14.5%] right-[77.86%] top-[calc(50%+367.5px)]">
        <div className="absolute inset-[-4.05%_-5%]">
          <svg className="block size-full" fill="none" height="40" viewBox="0 0 33 40" width="33">
            <path d={mainPaths.p2b76700} stroke="#1D2433" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Star / bookmark icon (top area) */}
      <div className="absolute left-[285px] size-[16px] top-[73px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
          <g clipPath="url(#clip0_main)">
            <rect fill="white" height="16" width="16" />
            <path d={mainPaths.p17f48400} stroke="#FFDE06" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
          <defs><clipPath id="clip0_main"><rect fill="white" height="16" width="16" /></clipPath></defs>
        </svg>
      </div>

      {/* Logout button (top-right) — navigates to general login */}
      <button onClick={onLogout} className="absolute h-[39px] left-[349px] top-[73px] w-[33px] active:opacity-60 transition-opacity">
        <svg className="absolute block inset-0 size-full" fill="none" height="39" viewBox="0 0 33 39" width="33">
          <path d={mainPaths.pf750080} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
      </button>

      {/* Badge image (center area) */}
      <div className="absolute inset-[60.09%_56.49%_35.33%_35.11%]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.5%] left-[0.33%] max-w-none top-[0.14%] w-[99.41%]" src={imgMainBadge} />
        </div>
      </div>

      {/* Community icon (bottom-right nav) */}
      <div className="absolute left-[298px] size-[40px] top-[775px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" viewBox="0 0 40 40" width="40">
          <path d={mainPaths.p313e2cc0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={mainPaths.pa1ce23e} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
      </div>

      {/* Bottom nav labels */}
      <p style={jua} className="-translate-x-1/2 absolute leading-[normal] left-[calc(50%-124.5px)] text-[15px] text-black text-center top-[822px] tracking-[0.75px] whitespace-nowrap">보안화면</p>
      <p style={jua} className="-translate-x-1/2 absolute leading-[normal] left-[calc(50%+121.5px)] text-[15px] text-black text-center top-[822px] tracking-[0.75px] whitespace-nowrap">커뮤니티</p>

      {/* Menu overlay */}
      <AnimatePresence>
        {menuOpen && <MenuOverlay key="menu" onClose={() => setMenuOpen(false)} onLogout={onLogout} />}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────
// Root App
// ─────────────────────────────────────────────

const DESIGN_W = 393;
const DESIGN_H = 852;

function useScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function update() {
      setScale(Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

const FADE_MS = 260;

const TRANSITION_CSS = `
  @keyframes zp-fade-in  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes zp-fade-out { from { opacity: 1; } to { opacity: 0; } }
  @media (prefers-reduced-motion: reduce) {
    [style*="zp-fade"] { animation: none !important; }
  }
`;

function renderContent(s: Screen, nav: (to: Screen) => void) {
  switch (s) {
    case "role-select": return <RoleSelectScreen onNext={(r) => nav(r === "피보호자" ? "pibohoja" : "bohoja")} />;
    case "pibohoja":    return <PibohojaScreen onNext={() => nav("id-setup")} onBack={() => nav("role-select")} />;
    case "bohoja":      return <BohojaScreen   onNext={() => nav("id-setup")} onBack={() => nav("role-select")} />;
    case "id-setup":    return <IdSetupScreen  onNext={() => nav("login")} />;
    case "login":         return <LoginScreen        onNext={() => nav("loading")} />;
    case "loading":       return <LoadingScreen      onDone={() => nav("main")} />;
    case "main":          return <MainScreen          onLogout={() => nav("general-login")} />;
    case "general-login": return <GeneralLoginScreen  onLogin={() => nav("loading")} />;
  }
}

export default function App() {
  const [current, setCurrent] = useState<Screen>("role-select");
  const [leaving, setLeaving] = useState<Screen | null>(null);
  const [busy, setBusy]       = useState(false);
  const scale = useScale();

  function nav(to: Screen) {
    if (busy) return;
    setBusy(true);
    setLeaving(current);
    setCurrent(to);
    setTimeout(() => { setLeaving(null); setBusy(false); }, FADE_MS);
  }

  const isMainFlow = (s: Screen | null) => s === "main";
  const showBg   = !isMainFlow(current);
  const showLogo = !["loading","main"].includes(current) && !["loading","main"].includes(leaving ?? "");

  return (
    <>
      <style>{TRANSITION_CSS}</style>
      <div className="flex items-center justify-center w-full h-full"
        style={{ backgroundImage: `url(${imgRectangle})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: "center center", position: "relative", overflow: "hidden", flexShrink: 0 }}>

          {/* Forest background — fades out when entering main */}
          <div style={{ opacity: showBg ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}>
            <Background />
          </div>
          {showLogo && <LogoLetters />}

          {/* Exiting content */}
          {leaving && (
            <div key={`out-${leaving}`} style={{ position: "absolute", inset: 0, animation: `zp-fade-out ${FADE_MS}ms ease forwards`, pointerEvents: "none" }}>
              {renderContent(leaving, nav)}
            </div>
          )}
          {/* Entering content */}
          <div key={`in-${current}`} style={{ position: "absolute", inset: 0, animation: `zp-fade-in ${FADE_MS}ms ease forwards` }}>
            {renderContent(current, nav)}
          </div>

        </div>
      </div>
    </>
  );
}
