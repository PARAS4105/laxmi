<?php 
	include_once 'vendor/autoload.php';

	function money_format($string){
		return $string;
	}

	$html = "<h2>Hello World<br /><br /><br /></h2>";
	
	$html .= '<div>&#x20b9;</div>';

	$html .= "<p>&#8377;</p>";

	$html .= "<p><img src='graph.php' /></p>";

	$html .= '<span style="font-family: fontawesome;">&#xf007;</span>';


	// $html .= "<p>₹</p>";

	
	$mpdf = new \Mpdf\Mpdf();	
	$mpdf->allow_charset_conversion = true;
	$mpdf->AddPage('','', 0, '', 0, 5, 5, 5, 5, 0, 'L');
	$mpdf->autoPageBreak = true;
	// $mpdf->allow_charset_conversion = true;
	$mpdf->charset_in = 'iso-8859-1';
	$mpdf->WriteHTML($html);
    if($_POST['name'] != ""){
    	$mpdf->Output($_POST['name'], 'I');
    }
    else{
    	$mpdf->Output('pdf_'.time().'.pdf', 'I');	
    }
?>