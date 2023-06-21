package PXU.EDU.VN.BAI03;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet_FormProcessing
 */
@WebServlet("/Servlet_FormProcessing")
public class Servlet_FormProcessing extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet_FormProcessing() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String text_field = request.getParameter("text_field");
		String checkbox = request.getParameter("checkbox");
		String listbox = request.getParameter("list_box");
		String radiobutton = request.getParameter("radio_button");
		out.print("Text_field: " + text_field + "</p>");
		out.print(" Check box: " + checkbox + "</p>");
		out.print("Listbox: " + listbox + "</p>");
		out.print("Radiobutton: " + radiobutton + "</p>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
