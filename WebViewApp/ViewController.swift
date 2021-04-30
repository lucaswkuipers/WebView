//
//  ViewController.swift
//  WebViewApp
//
//  Created by Lucas Werner Kuipers on 29/04/2021.
//

import UIKit
import WebKit

class ViewController: UIViewController {

	@IBOutlet weak var webView: WKWebView!
	
	override func viewDidLoad() {
		super.viewDidLoad()
		setupUI()
	}
	
	func setupUI() {
		let htmlPath = Bundle.main.path(forResource: "index", ofType: "html")
		let url = URL(fileURLWithPath: htmlPath!)
		let request = URLRequest(url: url)
		webView.load(request)
	}
}

