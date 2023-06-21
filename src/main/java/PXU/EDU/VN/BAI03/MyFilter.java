package PXU.EDU.VN.BAI03;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
	////bài 5
public class MyFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Khởi tạo Filter (nếu cần)
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        // Thực hiện các thao tác xử lý trước khi gọi Servlet
        
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        
        // Xử lý trước khi gọi Servlet
        
        filterChain.doFilter(request, response);
        
        // Thực hiện các thao tác xử lý sau khi gọi Servlet
        System.out.println("Xử lý sau khi gọi Servlet");

    }
    
    @Override
    public void destroy() {
        // Giải phóng tài nguyên (nếu cần)
    }
}