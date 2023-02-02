<?php
/**
 * Mail メールについてクラス化したものです。
 *
 * インスタンス化の際に送信元と送信先を正しく指定しないと例外を返します。
 * 題名と本文は追加で与えます。ともに引数として文字列だけでなく、文字列を返す関数を設定することが可能です。
 * 文字列を返す関数の引数は　$arguments で、必要であれば、その関数に続けて与えてください。
 * ヘッダも追加で与えることができます。こちらも引数として文字列だけでなく、文字列を返す関数を設定することが可能です。
 * 文字列を返す関数の引数は $arguments で、必要であれば、その関数に続けて与えてください。
 * ヘッダが正しい形式で与えられなかった場合は例外を返します。
 * HTMLメールとしたい場合は、設定のために inHTML() を呼び出してください。
 * send() でメールを送信します。
 *
 * send(): メールを送信する
 * setSubject(): 題名を設定します。
 * setMessage(): 本文を設定します。
 * appendMessage(): 本文を追加します。
 * appendHeader(): 一つのメールヘッダ形式の文字列を追加で設定します。
 * appendHeaders(): 複数のメールヘッダを意味するの文字列を追加で設定します。
 * inHTML(): このMailオブジェクトはHTMLメールとなるように設定します。
 * setLanguage(): 現在の言語を指定します。
 * setInternalEncoding(): 内部文字エンコーディングを設定します。
 * Mail::checkAddress(): メールアドレスかどうかをチェックします。
 * Mail::createHeader(): ヘッダを作って返します。
 */
class Mail
{

	// Property
	private $from = '';
	private $to = '';
	private $subject = '';
	private $message = '';
	private $additional_headers = '';
	private $html_mail = false;
	private $language = '';
	private $encoding = '';

	// Constructor
	public function __construct(string $from, string $to)//: void
	{
		if (!$this->isMailAddress($from)) throw new Exception('Error: It was not correct mail address to send from.');
		if (!$this->isMailAddress($to)) throw new Exception('Error: It was not correct mail address to send to.');
		$this->from = $from;
		$this->to = $to;
		$this->additional_headers = "From: $from";
	}

	// Private method
	private function isMailAddress(string $mail)//: bool
	{
		if (filter_var($mail, FILTER_VALIDATE_EMAIL)) return true;
		return false;
	}
	private function isMailHeader(string $header)//: bool
	{
		if (preg_match('/^[A-Za-z\-]+: [!-~]+$/', $header) == 1) return true;
		return false;
	}
	private function isMailHeaders(string $headers)//: bool
	{
		$list = explode("\r\n", $headers);
		foreach ($list as $item)
		{
			if (!$this->isMailHeader($item)) return false;
		}
		return true;
	}

	// Setter
/**
 * setSubject 題名を設定します。
 *
 * @param $subject は文字列か関数です。
 * @param $arguments は関数$subjectが使うための引数です。
 * @throw Exception 題名として文字列以外のものが与えられた場合に投げます。
 */
	public function setSubject(string $subject = null)//: void
	{
		$this->subject = $subject;
	}
/**
 * setMessage 本文を設定します。
 *
 * @param $message は文字列か関数です。
 * @param $arguments は関数$messageが使うための引数です。
 * @throw Exception 題名として文字列以外のものが与えられた場合に投げます。
 */
	public function setMessage(string $message = null)//: void
	{
		$this->message = wordwrap($message,70);
	}
/**
 * appendMessage 本文を追加します。
 *
 * @param $message は文字列か関数です。
 * @param $arguments は関数$messageが使うための引数です。
 * @throw Exception 題名として文字列以外のものが与えられた場合に投げます。
 */
	public function appendMessage(string $message = null)//: void
	{
		$this->message .= "\n" . wordwrap($message,70);
	}
/**
 * appendHeader 一つのメールヘッダ形式の文字列を追加で設定します。
 *
 * @param $header は文字列か関数です。
 * @param $arguments は関数$headerが使うための引数です。
 * @throw Exception ヘッダとして正しいフォーマットの文字列以外のものが与えられた場合に投げます。
 */
	public function appendHeader(string $header = null)//: void
	{
		$appendheader = $header;
		if (!$this->isMailHeader($appendheader)) throw new Exception('Error: It was not correct mail header.');
		$this->additional_headers .= "\r\n" . $appendheader;
	}
/**
 * appendHeaders 複数のメールヘッダを意味するの文字列を追加で設定します。
 *
 * @param $headers は文字列か関数です。
 * @param $arguments は関数$headerが使うための引数です。
 * @throw Exception ヘッダとして正しいフォーマットの文字列以外のものが与えられた場合に投げます。
 */
	public function appendHeaders(string $headers = null)//: void
	{
		$appendheaders = $header;
		if (!$this->isMailHeaders($appendheaders)) throw new Exception('Error: It was not correct mail headers.');
		$this->additional_headers .= "\r\n" . $appendheaders;
	}
/**
 * inHTML このMailオブジェクトはHTMLメールとなるように設定します。
 */
	public function inHTML()//: void
	{
		if ($this->html_mail) return;
		$this->html_mail = true;
		$this->appendHeader('Content-type: text/html; charset=UTF-8');
	}
/**
 * setLanguage 現在の言語を指定します。
 *
 * @param $language は現在の言語を表す文字列です。
 */
	public function setLanguage(string $language)//: void
	{
		$this->language = $language;
	}
/**
 * setInternalEncoding 内部文字エンコーディングを設定します。
 *
 * @param $encoding 内部文字エンコーディングを表す文字列です。
 */
	public function setInternalEncoding(string $encoding)//: void
	{
		$this->encoding = $encoding;
	}

	// Public Method
/**
 * send メールを送信する
 * @throw Exception ヘッダとして正しいフォーマットの文字列以外のものが与えられた場合に投げます。
 */
	public function send()//: void
	{
		$language = mb_language();
		$encoding = mb_internal_encoding();
		if(!$this->language) mb_language($this->language);
		if(!$this->encoding) mb_internal_encoding($this->encoding);
		$result = mb_send_mail($this->to, $this->subject, $this->message, $this->additional_headers);
		if(!$this->language) mb_language($language);
		if(!$this->encoding) mb_internal_encoding($encoding);
		if(!$result) throw new Exception('Error: It falured to send mail.');
	}

	// Static Method
/**
 * Mail::checkAddress 文字列がメールアドレスのフォーマットに従っているかどうか確認します。
 *
 * @param $mailはメールアドレスと思しき文字列です。
 * @return メールアドレスでない場合はfalseを返します。tureを返していても存在するメールアドレスとは限りません。
 */
	public static function checkAddress(string $mail = '')//: bool
	{
		return $this->isMailAddress($mail);
	}
/**
 * Mail::createHeader ヘッダを作って返します。
 *
 * @param $key はヘッダを表す文字列です。
 * @param $value はヘッダの内を表す文字列です。
 * @return 文字列を返します。ヘッダとして正しいフォーマットの文字列以外のものが与えられた場合は空文字を返します。
 */
	public static function createHeader(string $key = '', string $value = '')//: string
	{
		$header = "$key: $value";
		if (!$this->isMailHeader($header)) $header = '';
		return $header;
	}
}