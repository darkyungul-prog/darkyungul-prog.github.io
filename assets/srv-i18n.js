/* 2026-11-21 게임 서버가 보내는 한국어 오류 문구를 외국어 페이지에서 그 나라 말로 바꿔 보여 줌(모르는 문구는 일반 안내 + 원문) */
(function(){var L=(document.documentElement.lang||'ko').toLowerCase();if(/^ko/.test(L))return;var k=/^ja/.test(L)?'ja':/^zh/.test(L)?'zh':'en';
var M={
'게시글을 찾을 수 없습니다.':['Post not found.','投稿が見つかりません。','找不到文章。'],
'글을 찾을 수 없습니다.':['Post not found.','投稿が見つかりません。','找不到文章。'],
'게임 계정으로 로그인해 주세요.':['Please sign in with your game account.','ゲームアカウントでログインしてください。','請以遊戲帳號登入。'],
'길드 게시판은 게임 계정으로 로그인해야 이용할 수 있습니다.':['Sign in with your game account to use the guild board.','ギルド掲示板はゲームアカウントでログインすると使えます。','需以遊戲帳號登入才能使用公會留言板。'],
'길드 게시판은 로그인이 필요합니다.':['Please sign in to use the guild board.','ギルド掲示板にはログインが必要です。','公會留言板需要登入。'],
'이 길드의 길드원이 아닙니다.':['You are not a member of this guild.','このギルドのメンバーではありません。','你不是此公會的成員。'],
'길드 정보를 확인하지 못했습니다. 잠시 후 다시 시도하세요.':['Couldn’t check your guild. Please try again later.','ギルド情報を確認できませんでした。しばらくしてからお試しください。','無法確認公會資訊，請稍後再試。'],
'길드 정보를 읽을 권한이 없습니다. 다시 로그인해 주세요.':['No permission to read guild info. Please sign in again.','ギルド情報を読む権限がありません。もう一度ログインしてください。','沒有讀取公會資訊的權限，請重新登入。'],
'댓글 작성이 너무 잦습니다. 잠시 후 다시 시도해 주세요.':['You’re commenting too often. Please wait a moment.','コメントが多すぎます。しばらくしてからお試しください。','留言太頻繁，請稍後再試。'],
'댓글은 1~500자로 작성해 주세요.':['Comments must be 1–500 characters.','コメントは1～500文字で書いてください。','留言請在1～500字之間。'],
'제목은 2~80자, 내용은 5~3,000자로 작성해 주세요.':['Title 2–80 characters, body 5–3,000 characters.','タイトルは2～80文字、本文は5～3,000文字で書いてください。','標題2～80字，內容5～3,000字。'],
'한 시간에 게시글은 5개까지 작성할 수 있습니다.':['You can write up to 5 posts per hour.','投稿は1時間に5件までです。','每小時最多可發5篇文章。'],
'[운영팀]·[공지] 같은 말머리는 운영팀만 쓸 수 있어요.':['Tags like [Team] or [Notice] are for the team only.','[運営チーム]・[お知らせ]などの見出しは運営チームのみ使えます。','[營運團隊]、[公告]等標題僅限營運團隊使用。'],
'문의 내용을 5자 이상 적어 주세요.':['Please write at least 5 characters.','お問い合わせ内容を5文字以上書いてください。','請至少輸入5個字。'],
'이메일 주소를 다시 확인해 주세요.':['Please check your email address.','メールアドレスをもう一度確認してください。','請再次確認電子郵件地址。'],
'답장을 받을 이메일을 적어 주세요. (게임 계정으로 로그인하면 이메일 없이도 보낼 수 있어요)':['Please enter an email for our reply. (Signed in with a game account? Email is optional.)','返信先のメールアドレスを入力してください。（ゲームアカウントでログインしていれば不要です）','請填寫回覆用電子郵件。（以遊戲帳號登入則可不填）'],
'잠시 후 다시 보내 주세요. (10분에 3건까지)':['Please try again shortly. (Up to 3 per 10 minutes)','しばらくしてから送ってください。（10分に3件まで）','請稍後再送出。（每10分鐘最多3則）'],
'오늘은 문의를 더 보낼 수 없어요. 내일 다시 보내 주세요.':['You can’t send more requests today. Please try again tomorrow.','今日はこれ以上送れません。明日またお送りください。','今天無法再送出，請明天再試。'],
'올바르지 않은 쿠폰번호입니다.':['Invalid coupon code.','正しくないクーポン番号です。','無效的優惠券代碼。'],
'이미 사용한 쿠폰입니다.':['You’ve already used this coupon.','すでに使用したクーポンです。','此優惠券已使用過。'],
'기간이 끝난 쿠폰입니다.':['This coupon has expired.','期限切れのクーポンです。','此優惠券已過期。'],
'선착순 사용 인원이 모두 찼어요.':['This coupon has reached its usage limit.','先着の使用人数に達しました。','此優惠券已達使用上限。'],
'쿠폰을 찾을 수 없습니다.':['Coupon not found.','クーポンが見つかりません。','找不到優惠券。'],
'페이지가 올바르지 않습니다.':['Invalid page.','ページが正しくありません。','頁面不正確。'],
'게시판 종류가 올바르지 않습니다.':['Invalid board.','掲示板の種類が正しくありません。','留言板類型不正確。'],
'신고 대상이 올바르지 않습니다.':['Invalid report target.','通報対象が正しくありません。','檢舉對象不正確。'],
'로그인이 필요합니다.':['Please sign in.','ログインが必要です。','需要登入。'],
'로그인이 만료되었습니다. 다시 로그인하세요.':['Your sign-in expired. Please sign in again.','ログインの有効期限が切れました。もう一度ログインしてください。','登入已過期，請重新登入。']};
var G=['Something went wrong on the game server.','ゲームサーバーでエラーが発生しました。','遊戲伺服器發生錯誤。'],I={en:0,ja:1,zh:2}[k];
window.srvT=function(m){if(!m)return m;m=String(m);var t=M[m.trim()];if(t)return t[I];return /[가-힣]/.test(m)?G[I]+' ('+m+')':m;};})();
