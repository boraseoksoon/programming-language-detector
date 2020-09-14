(ns core.fn
  (:require ["child_process" :as process]))

(defn detect [src]
	(js/Promise. (fn [resolve] 
		(let [prefix "Programming language: "]
			(let [cmd (str "echo " src " | guesslang")]
				(defn complete [err stdout stderr]
					(let [language (.replace (.replace stdout "\n" "") prefix "")]
						(when (not err) 
							(resolve language))))
				(.exec process cmd complete))))))		

; (defn detect [src cb]
;   (let [prefix "Programming language: "]
;     (let [cmd (str "echo " src " | guesslang")]
;       (defn complete [err stdout stderr]
;         (let [language (.replace (.replace stdout "\n" "") prefix "")]
; 					(when (not err) 
; 						(cb language))))
;       (.exec process cmd complete))))


; (js/Promise. 
; \t(fn [res rej] (res )))

; const { exec } = require('child_process')
; exec(`echo ${code} | guesslang`, (err, stdout, stderr) => {
; \tif (err) {
; \t\tconsole.error("node couldn't execute the command : ", err);
; \t\treturn;
; \t}
; \tconsole.log(`${stdout}`);
; })

; (.log js/console (.getOwnPropertyNames js/Object process))