package PXU.EDU.VN.BAI03;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class RegisteringAccount
 */
@WebServlet("/RegisteringAccount")
public class dangky extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public dangky() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String dob = request.getParameter("dob");
        String gender = request.getParameter("gender");
        String email = request.getParameter("email");
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        out.println("<h2>Thông tin đăng ký</h2>");
        out.println("<p><strong>Họ:</strong> " + firstName + "</p>");
        out.println("<p><strong>Tên:</strong> " + lastName + "</p>");
        out.println("<p><strong>Ngày sinh:</strong> " + dob + "</p>");
        out.println("<p><strong>Giới tính:</strong> " + gender + "</p>");
        out.println("<p><strong>Địa chỉ email:</strong> " + email + "</p>");
        out.println("<p><strong>Tên tài khoản:</strong> " + username + "</p>");
        out.println("<p><strong>Mật khẩu:</strong> " + password + "</p>");

        out.close();
	}

}
