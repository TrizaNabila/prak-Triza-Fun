import PageHeader from "../components/PagesHeader";
import { useTheme } from "../context/ThemeContext";

const themeOptions = [
  {
    value: "dark",
    title: "Dark Mode",
    description: "Mode gelap dengan nuansa modern seperti Gemini.",
    accent: "from-[#ec4899] to-[#be185d]",
    preview: "bg-gradient-to-br from-slate-900 via-[#111827] to-slate-950",
  },
  {
    value: "light",
    title: "Light Mode",
    description: "Mode terang dengan tampilan bersih dan kontras lembut.",
    accent: "from-slate-200 to-slate-300",
    preview: "bg-gradient-to-br from-white via-slate-100 to-slate-200",
  },
];

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Settings" />

      <div className="grid gap-6">
        <div className={`rounded-[32px] border p-6 ${isDark ? "bg-slate-950/80 border-slate-800" : "bg-white border-slate-200"}`}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] font-semibold ${isDark ? "text-pink-400" : "text-slate-500"}`}>
                Tema Aplikasi
              </p>
              <h2 className={`mt-3 text-3xl font-bold ${isDark ? "text-white" : "text-slate-950"}`}>
                Pilih gaya tampilan ala Gemini
              </h2>
            </div>
            <div className={`rounded-full border px-1.5 py-1 ${isDark ? "border-slate-700 bg-slate-900/80" : "border-slate-200 bg-slate-100"}`}>
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setTheme(option.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    theme === option.value
                      ? "bg-gradient-to-r from-[#ec4899] to-[#d946ef] text-white shadow-lg shadow-pink-500/20"
                      : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {option.value === "dark" ? "Dark" : "Light"}
                </button>
              ))}
            </div>
          </div>

          <div className={`mt-8 rounded-[28px] border p-6 ${isDark ? "border-slate-800 bg-slate-900/90" : "border-slate-200 bg-slate-50"}`}>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-2xl ${isDark ? "bg-gradient-to-br from-pink-500 to-violet-500" : "bg-gradient-to-br from-slate-300 to-slate-400"}`} />
                  <div>
                    <p className={`text-sm uppercase tracking-[0.25em] font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Pratinjau Tema
                    </p>
                    <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-950"}`}>
                      {isDark ? "Dark Gemini" : "Light Gemini"}
                    </h3>
                  </div>
                </div>
                <p className={`text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Tema ini akan mengubah seluruh antarmuka, termasuk sidebar, header, dan komponen utama, agar terasa konsisten dan modern.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className={`rounded-3xl p-4 ${isDark ? "bg-slate-950/70 border border-slate-800" : "bg-white border border-slate-200"}`}>
                    <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? "text-slate-500" : "text-slate-500"}`}>Warna utama</p>
                    <p className={`mt-2 font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{isDark ? "Deep Violet" : "Soft Slate"}</p>
                  </div>
                  <div className={`rounded-3xl p-4 ${isDark ? "bg-slate-950/70 border border-slate-800" : "bg-white border border-slate-200"}`}>
                    <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? "text-slate-500" : "text-slate-500"}`}>Kontras</p>
                    <p className={`mt-2 font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{isDark ? "High Contrast" : "Balanced Contrast"}</p>
                  </div>
                </div>
              </div>

              <div className={`rounded-[28px] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.14)] ${isDark ? "bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-950" : "bg-gradient-to-br from-white via-slate-100 to-slate-200"}`}>
                <div className={`h-56 rounded-[24px] border border-white/10 ${isDark ? "bg-slate-950/95" : "bg-slate-100"} p-5 overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-2xl px-3 py-1 text-xs font-bold ${isDark ? "bg-white/10 text-slate-200" : "bg-slate-200 text-slate-700"}`}>Preview</span>
                    <span className={`text-xs uppercase tracking-[0.25em] ${isDark ? "text-slate-400" : "text-slate-500"}`}>{theme === "dark" ? "Dark" : "Light"}</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className={`h-12 rounded-3xl bg-white/5 ${isDark ? "border border-white/10" : "border border-slate-200 bg-slate-100"}`} />
                    <div className={`h-12 rounded-3xl bg-white/5 ${isDark ? "border border-white/10" : "border border-slate-200 bg-slate-100"}`} />
                    <div className={`h-12 rounded-3xl bg-white/5 ${isDark ? "border border-white/10" : "border border-slate-200 bg-slate-100"}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTheme(option.value)}
                className={`rounded-[28px] border p-5 text-left transition-all duration-200 ${
                  theme === option.value
                    ? "border-transparent bg-gradient-to-br text-white shadow-xl shadow-pink-500/20"
                    : isDark
                    ? "border-slate-800 bg-slate-900/95 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                } ${option.value === "dark" ? "bg-slate-950/90" : "bg-slate-50"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{option.title}</p>
                    <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{option.description}</p>
                  </div>
                  <div className={`h-9 w-9 rounded-full border ${theme === option.value ? "border-white/30 bg-white/10" : isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-slate-100"}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
