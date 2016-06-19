/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import javax.servlet.http.*;
import org.zkoss.zk.ui.Executions;

/**
 *
 * @author Gunner
 */
public class cookies {
    public static void setCookie(Cookie in_cookie) {
		((HttpServletResponse) Executions.getCurrent().getNativeResponse()).addCookie(in_cookie);
	}

	public static String getCookie(String name) {
		Cookie[] cookies = ((HttpServletRequest) Executions.getCurrent().getNativeRequest())
				.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals(name)) {
					return cookie.getValue();
				}
			}
		}
		return null;
	}
}
