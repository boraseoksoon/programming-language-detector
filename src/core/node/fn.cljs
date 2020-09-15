(ns core.node.fn
  (:require ["child_process" :as process]))

(def err-msg
	(str 
		"Error occured.
		Check if python3 and guesslang(https://github.com/yoeo/guesslang) is preinstalled || 
		Error: "))

(defn detect [src]
	(js/Promise. (fn [resolve reject] 
		(let [prefix "Programming language: "]
			(let [cmd (str "echo " src " | guesslang")]
				(defn complete [err stdout stderr]
					(cond 
						(not err) 
							(let [language (.replace (.replace stdout "\n" "") prefix "")] 
								(resolve language))
						:else
							(reject (str err-msg stderr))))	
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

; (.log js/console (.getOwnPropertyNames js/Object process))